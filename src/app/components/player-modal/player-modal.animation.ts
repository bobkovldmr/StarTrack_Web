import { createAnimation } from '@ionic/angular';
const getQueueVectors = (pre: number, post: number) => {
  const val = {
    scaleFrom: null,
    scaleTo: null,
    opacityFrom: null,
    opacityTo: null,
  };
  if (pre < post) {
    val.scaleFrom = 0.5;
    val.scaleTo = 1;
    val.opacityFrom = 0;
    val.opacityTo = 1;
  } else {
    val.scaleTo = 0.5;
    val.scaleFrom = 1;
    val.opacityFrom = 1;
    val.opacityTo = 0;
  }
  return val;
};
const getRec = (el: Element) => {
  const { top, left, width, height } = el.getBoundingClientRect();
  const rect = { top, left, width, height };
  return rect;
};

const getOffset = (el: HTMLElement) => {
  const top = el.offsetTop;
  const left = el.offsetLeft;
  const width = el.offsetWidth;
  const height = el.offsetHeight;

  return { top, left, width, height };
};

const ANIMATION_START = 'animation-start';
export const createQueueAnimation = async (
  targetEl: HTMLElement,
  isOpening: boolean
): Promise<void> => {
  const isPortait = window.matchMedia('(orientation: portrait)').matches;
  const animationChain = [];
  const baseAnimation = createAnimation()
    .duration(250)
    .fill('none')
    .easing('cubic-bezier(.42,0,.58,1)');

  targetEl.classList.add(ANIMATION_START);

  let playerQueueStarting: {
    top: number;
    left: number;
    width: number;
    height: number;
    y?: number;
  };
  let nowPlayingStarting: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  let controlsStarting: {
    top: number;
    left: number;
    width: number;
    height: number;
  };

  if (!isPortait) {
    /// Player
    const nowPlaying = targetEl.querySelector('.song-info');
    const controls = targetEl.querySelector('.controls-wrapper');
    const playerQueue = targetEl.querySelector('queue-list');

    const playerRecPre = getRec(nowPlaying);
    const playerQueueRecPre = getRec(playerQueue);
    const controlsRecPre = getRec(controls);

    targetEl.classList.toggle('queue-active');

    const playerRecPost = getRec(nowPlaying);
    const playerQueueRecPost = getRec(playerQueue);
    const controlsRecPost = getRec(controls);

    if (isOpening) {
      playerQueueStarting = {
        top: playerQueueRecPost.top,
        left: playerQueueRecPost.left,
        width: playerQueueRecPost.width,
        height: playerQueueRecPost.height,
      };
      nowPlayingStarting = {
        top: playerRecPre.top,
        left: playerRecPre.left,
        width: playerRecPre.width,
        height: playerRecPre.height,
      };
      controlsStarting = {
        top: controlsRecPre.top,
        left: controlsRecPre.left,
        width: controlsRecPre.width,
        height: controlsRecPre.height,
      }
    } else {
      playerQueueStarting = {
        top: playerQueueRecPre.top,
        left: playerQueueRecPre.left,
        width: playerQueueRecPre.width,
        height: playerQueueRecPre.height,
      };
      nowPlayingStarting = {
        top: playerRecPre.top,
        left: playerRecPre.left,
        width: playerRecPre.width,
        height: playerRecPre.height,
      };
      controlsStarting = {
        top: controlsRecPre.top,
        left: controlsRecPre.left,
        width: controlsRecPre.width,
        height: controlsRecPre.height,
      }
    }

    const playerQueueDeltaW = getQueueVectors(
      playerQueueRecPre.width,
      playerQueueRecPost.width
    );
    const playerQueueDeltaH = getQueueVectors(
      playerQueueRecPre.height,
      playerQueueRecPost.height
    );

    const playerQueueAnimation = createAnimation()
      .addElement(playerQueue)
      .beforeStyles({
        position: 'absolute',
        left: `${playerQueueStarting.left}px`,
        width: `${playerQueueStarting.width}px`,
        height: `${playerQueueStarting.height}px`,
        display: 'flex',
        'transform-origin': 'center',
        transform: `scale3d(${playerQueueDeltaW.scaleFrom}, ${playerQueueDeltaH.scaleFrom}, ${playerQueueDeltaH.scaleFrom})`,
        opacity: playerQueueDeltaH.opacityFrom,
      })
      .to(
        'transform',
        `scale3d(${playerQueueDeltaW.scaleTo}, ${playerQueueDeltaH.scaleTo}, ${playerQueueDeltaH.scaleTo})`
      )
      .to('opacity', playerQueueDeltaH.opacityTo)
      .afterClearStyles([
        'position',
        'left',
        'transform-origin',
        'width',
        'display',
        'height',
        'opacity',
        'transform',
        'top',
      ]);
    animationChain.push(playerQueueAnimation);

    const playerDeltaX = playerRecPost.left - playerRecPre.left;

    const nowPlayingAnimation = createAnimation()
      .addElement(nowPlaying)
      .beforeStyles({
        'transform-origin': 'top left',
        position: 'absolute',
        left: `${nowPlayingStarting.left}px`,
        top: `${nowPlayingStarting.top}px`,
        width: `${nowPlayingStarting.width}px`,
        height: `${nowPlayingStarting.height}px`,
      })
      .fromTo(
        'transform',
        `translate3d(0px, 0, 0)`,
        `translate3d(${playerDeltaX}px, 0,0)`
      )
      .afterClearStyles(['transform-origin', 'position', 'left', 'width', 'height', 'top']);
    animationChain.push(nowPlayingAnimation);



    const controlsAnimation = createAnimation()
      .addElement(controls)
      .beforeStyles({
        'transform-origin': 'top left',
        position: 'absolute',
        left: `${controlsStarting.left}px`,
        top: `${controlsStarting.top}px`,
        width: `${controlsStarting.width}px`,
        height: `${controlsStarting.height}px`,
      })
      .fromTo(
        'transform',
        `translate3d(0px, 0, 0)`,
        `translate3d(${playerDeltaX}px, 0,0)`
      )
      .afterClearStyles(['transform-origin', 'position', 'left', 'width', 'height', 'top']);
    animationChain.push(controlsAnimation);
  }

  if (isPortait) {
    const thumbnailEl = targetEl.querySelector('ion-thumbnail');
    const labelEl = targetEl.querySelector('ion-label');
    const playerQueueEl = targetEl.querySelector( 'queue-list') as HTMLElement;

    const thumbnailRecPre = getRec(thumbnailEl);
    const labelRecPre = getRec(labelEl);
    const playerQueueRecPre = getOffset(playerQueueEl);
  

    targetEl.classList.toggle('queue-active');

    const thumbnailRecPost = getRec(thumbnailEl);
    const labelRecPost = getRec(labelEl);
    const playerQueueRecPost = getOffset(playerQueueEl);


    if (isOpening) {
      playerQueueStarting = {
        top: playerQueueRecPost.top,
        left: playerQueueRecPost.left,
        width: playerQueueRecPost.width,
        height: playerQueueRecPost.height,
        y: 0,
      };
    } else {
      playerQueueStarting = {
        top: playerQueueRecPre.top,
        left: playerQueueRecPre.left,
        width: playerQueueRecPre.width,
        height: playerQueueRecPre.height,
        y: 100,
      };
    }


    const thumbnailDelta = {
      x: thumbnailRecPre.left - thumbnailRecPost.left,
      y: thumbnailRecPre.top - thumbnailRecPost.top,
      w: thumbnailRecPre.width / thumbnailRecPost.width,
      h: thumbnailRecPre.height / thumbnailRecPost.height,
    };

    const thumbnailAnimation = createAnimation()
      .addElement(thumbnailEl)
      .beforeStyles({ 'transform-origin': 'top left', })
      .from(
        'transform',
        `translate3d(${thumbnailDelta.x}px, ${thumbnailDelta.y}px, 0) scale3d(${thumbnailDelta.w}, ${thumbnailDelta.h}, ${thumbnailDelta.w})`
      )
      .afterClearStyles(['transform-origin']);
    animationChain.push(thumbnailAnimation);


    // Label
    const labelDelta = {
      x: labelRecPre.left - labelRecPost.left,
      y: labelRecPre.top - labelRecPost.top,
    };

    const labelAnimation = createAnimation()
      .addElement(labelEl)
      .from('transform', `translate3d(${0}px, ${labelDelta.y}px, ${0})`)
      .fromTo('opacity', 0, 1);

    animationChain.push(labelAnimation);

    //Queue List
    const playerQueueOPDelta = {
      from: isOpening ? 0 : 1,
      to: isOpening ? 1 : 0,
    };

    const playerQueueXDelta = {
      from: isOpening ? 100 : 0,
      to: isOpening ? 0 : 100,
    };

    const playerQueueAnimation = createAnimation()
      .addElement(playerQueueEl)
      .beforeStyles({
        position: 'absolute',
        top: `${playerQueueStarting.top}px`,
        width: `${playerQueueStarting.width}px`,
        height: `${playerQueueStarting.height}px`,
        overflow: 'hidden',
        display: 'block',
        opacity: playerQueueOPDelta.from,
        'transform-origin': 'center center',
      })
      .easing('ease-out')
      .fromTo('opacity', playerQueueOPDelta.from, playerQueueOPDelta.to)
      .fromTo(
        'transform',
        `translate3d(0, ${playerQueueXDelta.from}%, 0)`,
        `translate3d(0, ${playerQueueXDelta.to}%, 0)`
      )
      .delay(isOpening ? 100 : 0)
      .afterClearStyles([
        'position',
        'top',
        'width',
        'height',
        'overflow',
        'display',
        'transform-origin',
        'opacity',
      ]);

    animationChain.push(playerQueueAnimation);
  }

  baseAnimation
    .addElement(targetEl)
    .addAnimation(animationChain)
    .afterRemoveClass(ANIMATION_START)
    .play();
};

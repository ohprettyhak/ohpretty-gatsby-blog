export function toFit(cb, { dismissCondition = () => false, triggerCondition = () => true }: any) {
  if (!cb) throw Error('Invalid required arguments');

  let tick: boolean = false;

  return function () {
    if (tick) return;

    tick = true;
    return requestAnimationFrame(() => {
      if (dismissCondition()) {
        tick = false;
        return;
      }

      if (triggerCondition()) {
        tick = false;
        return cb();
      }
    });
  };
}

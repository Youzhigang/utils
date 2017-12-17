function forEach (fn, arr) {
  for(let l = arr.length, i = 0; i < l; i++) {
    // fn.apply(context, [arguments]);
    fn.call(null, arr[i], i, arr);
  }
}

function bind(fn, context, ...arguments) {
  const args = [...arguments]
  return function () {
    fn.apply(context, [...args]);
  } 
}

function debounce(fn, waiter) {
  let timer
  
  return function (...arguments) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, ...arguments)
    }, waiter);
  }
}

function throttle (fn, time) {
  let current = new Date().getTime()
  let last = 0
  return function (...arguments) {
    if ((current - last) > time)) {
      fn.apply(this, ...arguments)
      last = + current
    }
  }
}
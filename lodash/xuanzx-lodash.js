var xuanzx = function () {




  function chunk(array, size = 1) {
    if (size >= array.length) {
      return [array.slice()]
    }
    let res = []
    let len = array.length
    for (let i = 0; i < len; i += size) {
      let temp = []
      let end = (i + size) <= len ? i + size : len
      for (let j = i; j < end; j++) {
        temp.push(array[j])
      }
      res.push(temp)
    }
    return res
  }


  function compact(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  }


  function difference(array, size = 1) {

  }
  function differenceBy(array, size = 1) {

  }
  function differenceWith(array, size = 1) {

  }

  function drop(array, n = 1) {
    return array.slice(n)
  }




  function dropRight(array, n = 1) {
    if (n >= array.length) {
      return []
    } else if (n <= 0) {
      return array.slice()
    }
    return array.slice(0, array.length - n)
  }




  function dropRightWhile(array, size = 1) {

  }
  function dropWhile(array, size = 1) {

  }
  function fill(array, size = 1) {

  }
  function findIndex(array, size = 1) {

  }
  function indLastIndex(array, size = 1) {

  }
  function findLastIndex(array, size = 1) {

  }



  function flatten(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        for (let every of item) {
          res.push(every)
        }
      } else {
        res.push(item)
      }
    }
    return res
  }


  function flattenDeep(array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(array[i])) {
        item = flattenDeep(array[i])
        for (let j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(item)
      }
    }
    return res
  }



  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array.slice()
    }

    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        let item = flattenDepth(array[i], depth - 1)
        for (let j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  }

  function fromPairs(array, size = 1) {

  }
  function head(array, size = 1) {

  }
  function indexOf(array, size = 1) {

  }
  function initial(array, size = 1) {

  }
  function intersection(array, size = 1) {

  }
  function intersectionBy(array, size = 1) {

  }
  function intersectionWith(array, size = 1) {

  }
  function join(array, size = 1) {

  }
  function last(array, size = 1) {

  }
  function lastIndexOf(array, size = 1) {

  }
  function nth(array, size = 1) {

  }
  function pull(array, size = 1) {

  }
  function pullAll(array, size = 1) {

  }
  function pullAllBy(array, size = 1) {

  }
  function pullAllWith(array, size = 1) {

  }
  function remove(array, size = 1) {

  }
  function reverse(array, size = 1) {

  }
  function uniq(array, size = 1) {

  }
  function uniqBy(array, size = 1) {

  }
  function without(array, size = 1) {

  }
  function zip(array, size = 1) {

  }
  function countBy(array, size = 1) {

  }
  function every(array, size = 1) {

  }
  function filter(array, size = 1) {

  }
  function find(array, size = 1) {

  }
  function forEach(array, size = 1) {

  }
  function groupBy(array, size = 1) {

  }
  function keyBy(array, size = 1) {

  }
  function map(array, size = 1) {

  }
  function partition(array, size = 1) {

  }
  function reduce(array, size = 1) {

  }
  function reduceRight(array, size = 1) {

  }
  function reject(array, size = 1) {

  }
  function sample(array, size = 1) {

  }
  function shuffle(array, size = 1) {

  }
  function size(array, size = 1) {

  }
  function some(array, size = 1) {

  }
  function isBoolean(array, size = 1) {

  }
  function isEmpty(array, size = 1) {

  }
  function isEqual(array, size = 1) {

  }
  function isNaN(array, size = 1) {

  }
  function isNil(array, size = 1) {

  }
  function isNull(array, size = 1) {

  }
  function isNumber(array, size = 1) {

  }
  function toArray(array, size = 1) {

  }
  function ceil(array, size = 1) {

  }
  function max(array, size = 1) {

  }
  function maxBy(array, size = 1) {

  }
  function sumBy(array, size = 1) {

  }
  function sum(array, size = 1) {

  }
  function repeat(array, size = 1) {

  }
  function range(array, size = 1) {

  }



  return {
    chunk: chunk,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    dropWhile: dropWhile,
    fill: fill,
    findIndex: findIndex,
    findLastIndex: indLastIndex,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    reverse: reverse,
    uniq: uniq,
    uniqBy: uniqBy,
    without: without,
    zip: zip,
    countBy: countBy,
    every: every,
    filter: filter,
    find: find,
    forEach: forEach,
    groupBy: groupBy,
    keyBy: keyBy,
    map: map,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    sample: sample,
    shuffle: shuffle,
    size: size,
    some: some,
    isBoolean: isBoolean,
    isEmpty: isEmpty,
    isEqual: isEqual,
    isNaN: isNaN,
    isNil: isNil,
    isNull: isNull,
    isNumber: isNumber,
    toArray: toArray,
    ceil: ceil,
    max: max,
    maxBy: maxBy,
    sumBy: sumBy,
    sum: sum,
    repeat: repeat,
    range: range,
  }
}()

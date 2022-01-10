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


  function fromPairs(pairs) {
    var res = {}
    for (var item of pairs) {
      res[item[0]] = item[1]
    }
    return res
  }



  function head(array) {
    return array[0]
  }



  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i
      }
    }
    return -1
  }


  function initial(array) {
    let len = array.length - 1
    let result = []
    for (let i = 0; i < len; i++) {
      result.push(array[i])
    }
    return result
  }



  function intersection(array, size = 1) {

  }
  function intersectionBy(array, size = 1) {

  }
  function intersectionWith(array, size = 1) {

  }



  function join(array, separator = ',') {
    let str = ''
    for (let i = 0; i < array.length - 1; i++) {
      str += array[i].toString() + separator
    }
    str += array[array.length - 1]
    return str
  }



  function last(array) {
    return array[array.length - 1]
  }


  function lastIndexOf(array, val, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (val === array[i]) {
        return i
      }
    }
    return -1
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
  function slice(array, size = 1) {

  }
  function sortedIndex(array, size = 1) {

  }
  function sortedIndexBy(array, size = 1) {

  }
  function sortedIndexOf(array, size = 1) {

  }
  function sortedLastIndex(array, size = 1) {

  }
  function sortedLastIndexBy(array, size = 1) {

  }
  function sortedLastIndexOf(array, size = 1) {

  }
  function sortedUniq(array, size = 1) {

  }
  function sortedUniqBy(array, size = 1) {

  }
  function tail(array, size = 1) {

  }
  function take(array, size = 1) {

  }
  function takeRight(array, size = 1) {

  }
  function takeRightWhile(array, size = 1) {

  }
  function takeWhile(array, size = 1) {

  }
  function union(array, size = 1) {

  }
  function unionBy(array, size = 1) {

  }
  function uniqWith(array, size = 1) {

  }
  function uniq(array, size = 1) {

  }
  function uniqBy(array, size = 1) {

  }
  function unzip(array, size = 1) {

  }
  function unzipWith(array, size = 1) {

  }
  function without(array, size = 1) {

  }
  function xor(array, size = 1) {

  }
  function xorBy(array, size = 1) {

  }
  function xorWith(array, size = 1) {

  }
  function zipObject(array, size = 1) {

  }
  function zipObjectDeep(array, size = 1) {

  }
  function zipWith(array, size = 1) {

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
    difference: difference,
    differenceBy: differenceBy,
    differenceWith: differenceWith,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    dropWhile: dropWhile,
    fill: fill,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    indLastIndex: indLastIndex,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    intersectionBy: intersectionBy,
    intersectionWith: intersectionWith,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    pullAllBy: pullAllBy,
    pullAllWith: pullAllWith,
    remove: remove,
    reverse: reverse,
    slice: slice,
    sortedIndex: sortedIndex,
    sortedIndexBy: sortedIndexBy,
    sortedIndexOf: sortedIndexOf,
    sortedLastIndex: sortedLastIndex,
    sortedLastIndexBy: sortedLastIndexBy,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    tail: tail,
    take: take,
    takeRight: takeRight,
    takeRightWhile: takeRightWhile,
    takeWhile: takeWhile,
    union: union,
    unionBy: unionBy,
    uniqWith: uniqWith,
    uniq: uniq,
    uniqBy: uniqBy,
    uniqWith: uniqWith,
    unzip: unzip,
    unzipWith: unzipWith,
    without: without,
    xor: xor,
    xorBy: xorBy,
    xorWith: xorWith,
    zipObject: zipObject,
    zipObjectDeep: zipObjectDeep,
    zipWith: zipWith,
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

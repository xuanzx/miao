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


  function fill(ary, value, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
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



  function reverse(array) {
    let left = 0
    let right = array.length - 1
    while (left < right) {
      let temp = array[left]
      array[left] = array[right]
      array[right] = temp
      left++
      right--
    }
    return array
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


  function tail(array) {
    var res = []
    for (var i = 1; i < array.length; i++) {
      res.push(array[i])
    }
    return res
  }


  function take(array, n = 1) {
    var res = []
    for (var i = 0; i < array.length - n + 1; i++) {
      res.push(array[i])
    }
    return res
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
  function unionWith(array, size = 1) {

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


  function without(array, ...values) {
    let res = []
    array.forEach(item => {
      if (!values.includes(item)) {
        res.push(item)
      }
    })
    return res
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


  function zip(...args) {

  }



  function countBy(array, size = 1) {

  }
  function every(array, size = 1) {

  }
  function filter(array, size = 1) {

  }
  function find(array, size = 1) {

  }
  function findLast(array, size = 1) {

  }
  function flatMap(array, size = 1) {

  }
  function flatMapDeep(array, size = 1) {

  }
  function flatMapDepth(array, size = 1) {

  }


  function forEach(array, size = 1) {

  }


  function forEachRight(array, size = 1) {

  }
  function groupBy(array, size = 1) {

  }
  function includes(array, size = 1) {

  }
  function invokeMap(array, size = 1) {

  }
  function keyBy(array, size = 1) {

  }
  function map(array, size = 1) {

  }
  function orderBy(array, size = 1) {

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
  function sampleSize(array, size = 1) {

  }
  function shuffle(array, size = 1) {

  }
  function size(array, size = 1) {

  }


  function some(array, predicate) {
    for (var i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return true
      }
    }
    return false
  }


  function sortBy(array, size = 1) {

  }
  function defer(array, size = 1) {

  }
  function delay(array, size = 1) {

  }
  function castArray(array, size = 1) {

  }
  function conformsTo(array, size = 1) {

  }
  function eq(array, size = 1) {

  }
  function gt(array, size = 1) {

  }
  function gte(array, size = 1) {

  }
  function isArguments(array, size = 1) {

  }
  function isArray(array, size = 1) {

  }
  function isArrayBuffer(array, size = 1) {

  }

  function isArrayLike(array, size = 1) {

  }
  function isArrayLikeObject(array, size = 1) {

  }
  function isBoolean(array, size = 1) {

  }
  function isBoolean(array, size = 1) {

  }
  function isDate(array, size = 1) {

  }
  function isElement(array, size = 1) {

  }

  function isEmpty(array, size = 1) {

  }
  function isEqual(array, size = 1) {

  }
  function isEqualWith(array, size = 1) {

  }
  function isError(array, size = 1) {

  }
  function isFunction(array, size = 1) {

  }
  function isInteger(array, size = 1) {

  }
  function isLength(array, size = 1) {

  }
  function isMap(array, size = 1) {

  }
  function isMatch(array, size = 1) {

  }
  function isMatchWith(array, size = 1) {

  }
  function isNaN(array, size = 1) {

  }

  function isNil(array, size = 1) {

  }
  function isNative(array, size = 1) {

  }
  function isNull(array, size = 1) {

  }


  function isNumber(value) {
    if (Math.abs(value) == Infinity || value != value || isFinite(value)) {
      return true
    }
    return false
  }



  function isObject(array, size = 1) {

  }
  function isObjectLike(array, size = 1) {

  }
  function isPlainObject(array, size = 1) {

  }

  function isRegExp(array, size = 1) {

  }
  function isSafeInteger(array, size = 1) {

  }
  function isSet(array, size = 1) {

  }
  function isString(array, size = 1) {

  }
  function isSymbol(array, size = 1) {

  }
  function isTypedArray(array, size = 1) {

  }
  function isUndefined(array, size = 1) {

  }
  function isWeakMap(array, size = 1) {

  }
  function isWeakSet(array, size = 1) {

  }
  function lt(array, size = 1) {

  }
  function lte(array, size = 1) {

  }
  function toArray(array, size = 1) {

  }
  function toFinite(array, size = 1) {

  }

  function toInteger(array, size = 1) {

  }
  function toLength(array, size = 1) {

  }
  function toNumber(array, size = 1) {

  }
  function assign(array, size = 1) {

  }
  function toSafeInteger(array, size = 1) {

  }
  function add(array, size = 1) {

  }

  function ceil(array, size = 1) {

  }
  function divide(array, size = 1) {

  }
  function floor(array, size = 1) {

  }

  function max(array) {
    var maxNum = -Infinity
    if (array.length = 0) {
      return undefined
    }
    for (var i = 0; i < array.length; i++) {
      if (array[i] > maxNum) {
        maxNum = array[i]
      }
    }
    return maxNum
  }



  function maxBy(array, size = 1) {

  }
  function mean(array, size = 1) {

  }
  function meanBy(array, size = 1) {

  }

  function min(array, size = 1) {

  }
  function minBy(array, size = 1) {

  }
  function multiply(array, size = 1) {

  }
  function round(array, size = 1) {

  }
  function subtract(array, size = 1) {

  }



  function sumBy(array, size = 1) {

  }
  function sum(array, size = 1) {

  }
  function clamp(array, size = 1) {

  }
  function inRange(array, size = 1) {

  }
  function random(array, size = 1) {

  }
  function assignIn(array, size = 1) {

  }
  function at(array, size = 1) {

  }
  function defaults(array, size = 1) {

  }
  function defaultsDeep(array, size = 1) {

  }
  function findKey(array, size = 1) {

  }
  function findLastKey(array, size = 1) {

  }
  function forIn(array, size = 1) {

  }
  function forInRight(array, size = 1) {

  }
  function forOwn(array, size = 1) {

  }
  function forOwnRight(array, size = 1) {

  }
  function functions(array, size = 1) {

  }
  function functionsIn(array, size = 1) {

  }
  function get(array, size = 1) {

  }
  function has(array, size = 1) {

  }
  function hasIn(array, size = 1) {

  }
  function invert(array, size = 1) {

  }
  function invertBy(array, size = 1) {

  }
  function keys(array, size = 1) {

  }
  function keysIn(array, size = 1) {

  }
  function mapKeys(array, size = 1) {

  }
  function mapValues(array, size = 1) {

  }
  function merge(array, size = 1) {

  }

  function mergeWith(array, size = 1) {

  }
  function omit(array, size = 1) {

  }
  function omitBy(array, size = 1) {

  }

  function pick(array, size = 1) {

  }
  function pickBy(array, size = 1) {

  }
  function result(array, size = 1) {

  }
  function set(array, size = 1) {

  }
  function setWith(array, size = 1) {

  }
  function toPairs(array, size = 1) {

  }
  function toPairsIn(array, size = 1) {

  }
  function transform(array, size = 1) {

  }
  function unset(array, size = 1) {

  }
  function update(array, size = 1) {

  }
  function updateWith(array, size = 1) {

  }
  function values(array, size = 1) {

  }
  function valuesIn(array, size = 1) {

  }
  function camelCase(array, size = 1) {

  }

  function capitalize(array, size = 1) {

  }
  function deburr(array, size = 1) {

  }
  function endsWith(array, size = 1) {

  }
  function deburr(array, size = 1) {

  }
  function escape(array, size = 1) {

  }
  function escapeRegExp(array, size = 1) {

  }
  function kebabCase(array, size = 1) {

  }
  function lowerCase(array, size = 1) {

  }
  function pad(array, size = 1) {

  }
  function padEnd(array, size = 1) {

  }
  function padStart(array, size = 1) {

  }

  function repeat(array, size = 1) {

  }
  function replace(array, size = 1) {

  }
  function snakeCase(array, size = 1) {

  }
  function split(array, size = 1) {

  }
  function startCase(array, size = 1) {

  }
  function startsWith(array, size = 1) {

  }
  function toLower(array, size = 1) {

  }
  function toUpper(array, size = 1) {

  }
  function trim(array, size = 1) {

  }
  function trimEnd(array, size = 1) {

  }
  function trimStart(array, size = 1) {

  }
  function truncate(array, size = 1) {

  }
  function unescape(array, size = 1) {

  }
  function upperCase(array, size = 1) {

  }
  function upperFirst(array, size = 1) {

  }
  function words(array, size = 1) {

  }
  function bindAll(array, size = 1) {

  }
  function defaultTo(array, size = 1) {

  }
  function range(array, size = 1) {

  }
  function rangeRight(array, size = 1) {

  }
  function mixin(array, size = 1) {

  }
  function times(array, size = 1) {

  }
  function toPath(array, size = 1) {

  }
  function uniqueId(array, size = 1) {

  }
  function cloneDeep(array, size = 1) {

  }
  function uniqueId(array, size = 1) {

  }
  function identity(array, size = 1) {

  }
  function concat(array, size = 1) {

  }
  function pullAt(array, size = 1) {

  }
  function matches(array, size = 1) {

  }
  function property(array, size = 1) {

  }
  function ary(array, size = 1) {

  }
  function unary(array, size = 1) {

  }
  function negate(array, size = 1) {

  }
  function once(array, size = 1) {

  }
  function spread(array, size = 1) {

  }
  function curry(array, size = 1) {

  }
  function memoize(array, size = 1) {

  }
  function flip(array, size = 1) {

  }
  function conforms(array, size = 1) {

  }
  function constant(array, size = 1) {

  }
  function flow(array, size = 1) {

  }
  function method(array, size = 1) {

  }
  function methodOf(array, size = 1) {

  }
  function nthArg(array, size = 1) {

  }
  function propertyOf(array, size = 1) {

  }
  function parseJson(array, size = 1) {

  }
  function stringifyJson(array, size = 1) {

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
    unionWith: unionWith,
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
    findLast: findLast,
    flatMap: flatMap,
    flatMapDeep: flatMapDeep,
    flatMapDepth: flatMapDepth,
    forEach: forEach,
    forEachRight: forEachRight,
    groupBy: groupBy,
    includes: includes,
    invokeMap: invokeMap,
    keyBy: keyBy,
    map: map,
    orderBy: orderBy,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    sample: sample,
    sampleSize: sampleSize,
    shuffle: shuffle,
    size: size,
    some: some,
    sortBy: sortBy,
    defer: defer,
    delay: delay,
    castArray: castArray,
    conformsTo: conformsTo,
    eq: eq,
    gt: gt,
    gte: gte,
    isArguments: isArguments,
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isArrayLike: isArrayLike,
    isArrayLikeObject: isArrayLikeObject,
    isBoolean: isBoolean,
    isDate: isDate,
    isElement: isElement,
    isEmpty: isEmpty,
    isEqual: isEqual,
    isEqualWith: isEqualWith,
    isError: isError,
    isFinite: isFinite,
    isFunction: isFunction,
    isInteger: isInteger,
    isLength: isLength,
    isMap: isMap,
    isMatch: isMatch,
    isMatchWith: isMatchWith,
    isNaN: isNaN,
    isNative: isNative,
    isNil: isNil,
    isNull: isNull,
    isNumber: isNumber,
    isObject: isObject,
    isObjectLike: isObjectLike,
    isPlainObject: isPlainObject,
    isRegExp: isRegExp,
    isSafeInteger: isSafeInteger,
    isSet: isSet,
    isString: isString,
    isSymbol: isSymbol,
    isTypedArray: isTypedArray,
    isUndefined: isUndefined,
    isWeakMap: isWeakMap,
    isWeakSet: isWeakSet,
    lt: lt,
    lte: lte,
    toArray: toArray,
    toFinite: toFinite,
    toInteger: toInteger,
    toLength: toLength,
    toNumber: toNumber,
    assign: assign,
    toSafeInteger: toSafeInteger,
    add: add,
    ceil: ceil,
    divide: divide,
    floor: floor,
    max: max,
    maxBy: maxBy,
    mean: mean,
    meanBy: meanBy,
    min: meanBy,
    minBy: minBy,
    multiply: multiply,
    round: round,
    subtract: subtract,
    sumBy: sumBy,
    sum: sum,
    clamp: clamp,
    inRange: inRange,
    random: random,
    assignIn: assignIn,
    at: at,
    defaults: defaults,
    defaultsDeep: defaultsDeep,
    findKey: findKey,
    findLastKey: findLastKey,
    forIn: forIn,
    forInRight: forInRight,
    forOwn: forOwn,
    forOwnRight: forOwnRight,
    functions: functions,
    functionsIn: functionsIn,
    get: get,
    has: has,
    hasIn: hasIn,
    invert: invert,
    invertBy: invertBy,
    keys: keys,
    keysIn: keysIn,
    mapKeys: mapKeys,
    mapValues: mapValues,
    merge: merge,
    mergeWith: mergeWith,
    omit: omit,
    omitBy: omitBy,
    pick: pick,
    pickBy: pickBy,
    result: result,
    set: set,
    setWith: setWith,
    toPairs: toPairs,
    toPairsIn: toPairsIn,
    transform: transform,
    unset: unset,
    update: update,
    updateWith: updateWith,
    values: values,
    valuesIn: valuesIn,
    camelCase: camelCase,
    capitalize: capitalize,
    deburr: deburr,
    endsWith: endsWith,
    escape: escape,
    escapeRegExp: escapeRegExp,
    kebabCase: kebabCase,
    lowerCase: lowerCase,
    lowerFirst: lowerCase,
    pad: pad,
    padEnd: padEnd,
    padStart: padStart,
    parseInt: parseInt,
    repeat: repeat,
    replace: replace,
    snakeCase: snakeCase,
    split: split,
    startCase: startCase,
    startsWith: startsWith,
    toLower: toLower,
    toUpper: toUpper,
    trim: trim,
    trimEnd: trimEnd,
    trimStart: trimStart,
    truncate: truncate,
    unescape: unescape,
    upperCase: upperCase,
    upperFirst: upperFirst,
    words: words,
    bindAll: bindAll,
    defaultTo: defaultTo,
    range: range,
    rangeRight: rangeRight,
    mixin: mixin,
    times: times,
    toPath: toPath,
    uniqueId: uniqueId,
    cloneDeep: cloneDeep,
    identity: identity,
    concat: concat,
    pullAt: pullAt,
    matches: matches,
    property: property,
    ary: ary,
    unary: unary,
    negate: negate,
    once: once,
    spread: spread,
    curry: curry,
    memoize: memoize,
    flip: flip,
    conforms: conforms,
    constant: constant,
    flow: flow,
    method: method,
    methodOf: methodOf,
    nthArg: nthArg,
    propertyOf: propertyOf,
    parseJson: parseJson,
    stringifyJson: stringifyJson,
  }
}()

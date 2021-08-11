'use strict'

const v8 = require('v8')

// console.log(v8.getHeapStatistics())

const totalheapsize = v8.getHeapStatistics().total_available_size
let totalHeaSizeInGB = (totalheapsize / 1024 / 1024 / 1024).toFixed(2)

console.log(`toal heap size (bytes) ${totalheapsize}, gb : ${totalHeaSizeInGB}`)
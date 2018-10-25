import { jointArray } from "./util"

test("Matching set in both arrays", () => {
  const arr1 = [ "a", "b", "c", "d" ]
  const arr2 = [ "b", "c", "e", "f" ]
  const expected = [ "b", "c" ]

  const result = jointArray(arr1, arr2)

  expect(result).toEqual(expected)
})

test("No matching set", () => {
  const arr1 = [ "a", "b", "c", "d" ]
  const arr2 = [ "e", "f", "g" ]
  const expected = []

  const result = jointArray(arr1, arr2)

  expect(result).toEqual(expected)
})

test("Undefined first array", () => {
  const arr1 = undefined
  const arr2 = [ "e", "f", "g" ]
  const expected = []

  const result = jointArray(arr1, arr2)

  expect(result).toEqual(expected)
})

test("Undefined second array", () => {
  const arr1 = [ "a", "b", "c", "d" ]
  const arr2 = undefined
  const expected = []

  const result = jointArray(arr1, arr2)

  expect(result).toEqual(expected)
})

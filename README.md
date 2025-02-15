# MongoDB $inc Operator Error with Non-Numeric Field

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment numeric fields only. Attempting to increment a non-numeric field will result in an error.

## Bug Description

The provided JavaScript code uses `updateOne` to increment both the 'age' and 'address' fields. 'address' is a string and hence causes the error. The solution demonstrates the correct usage of `$inc` and how to handle potential errors.

## Solution

The solution shows how to avoid this error by checking if the field is numeric and handling errors appropriately.
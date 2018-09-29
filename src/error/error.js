var vectors = require('../core/vectors');
/**
 * @description Returns the MSE error of two series
 * @param{array} series1 values array
 * @param{array} series2 values array
 * @return{value} the mse error
 */
var mse = function (series1, series2)
{
  return vectors.avgVector (vectors.powVector (vectors.diffVectors(series1, series2)));
}
module.exports.mse = mse;

////////////////////////////////////////////////////////

/**
 * @description Returns the RMSE error (squared MSE)
 * @param{array} series1 values array
 * @param{array} series2 values array
 * @return{value} the RMSE error
 */
module.exports.rmse = function (series1, series2)
{
  return Math.sqrt (mse(series1, series2));
}

////////////////////////////////////////////////////////

/**
 * @description Returns the MAE erro (mean absolute error)
 * @param{array} series1 values array
 * @param{array} series2 values array
 * @return{value} the mae error
 */
module.exports.mae = function (series1, series2)
{
  return vectors.avgVector(vectors.absVector(vectors.diffVectors(series1, series2)));
}

module.exports = function(rows) {
  return rows.map(function(row) {
    return row ? row.join(',') : ''
  }).join('\n')
}
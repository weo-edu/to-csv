module.exports = function(rows) {
  return rows.map(function(row) {
    return row ? row.map(escapeStr).join(',') : ''
  }).join('\n')
}

function escapeStr (str) {
  str = str || ''
  return '"' + str.replace('"', '""') + '"'
}

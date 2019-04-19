var sqlMap = {
  news: {
    // add: 'insert into reader(name) values (?)',
    // delete: 'delete from reader where name = ?',
    search: 'select * from news' //查找读者信息
    // edit: 'update reader set lendBook1 = ? where name = ?'//更新用户表中的已借阅书籍
  }
}
module.exports = sqlMap
  
const db=require('../../data/db-config')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
//SELECT * FROM posts;
//return db('posts')
//SELECT id, title, contents FROM posts;


  return db()
  .from('posts')
  .select('id as p_id', 'title', 'contents')
}

function getById(id) {
  //SELECT * FROM posts WHERE id = 1;   * provides a LIST, even if it is an empty array
  //return db('posts').where({id})
  return db('posts').where('id', id).first() //.first gives first object w/o array
}

function create(post) {
  //INSERT INTO posts (title, contents) VALUES('foo','bar')
  return db ('posts').insert(post)
    .then(([id])=>{
      throw new Error('horribel')
      return getById(id)
    })
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}

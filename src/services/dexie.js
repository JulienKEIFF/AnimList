import Dexie from 'dexie'

class DexieService {
  constructor() {
    this.db = new Dexie("animlist")
    this.db.version(1).stores({token: "++id, username, token"})
  }
  db
  addToken = async function add(token, username){
    this.db.transaction('rw', this.db.token, async() =>{
      if(await this.db.token.count() >= 1) await this.db.token.clear()
      await this.db.token.add({username: username, token: token})
    })
  }

  async logout(){
    await this.db.token.clear()
  }

  async getToken(){
    const user = await this.db.token.toArray()
    const token = user[0]
    return token
  }
}


export default DexieService

export const DexieServices = new DexieService()
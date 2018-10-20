
import Person from "./Person"

export default class Table{
  name: string;
  members: Array<Person>
  constructor(name: string, members: Array<Person>) {
    this.name = name;
    this.members = members;
  }
}

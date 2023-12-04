const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join());
// console.log(path.resolve());
// console.log(process.cwd());

// path.join(__dirname);

const usersPath = path.join(__dirname, "..", "db", "users.json");

class FileOperations {
  constructor(path) {
    this.path = path;
  }

  read = async () => {
    const data = await fs.readFile(this.path);
    return JSON.parse(data);
  };

  display = async () => {
    const users = await this.read();
    console.table(users);
  };

  create = async (users) => {
    const data = await fs.writeFile(this.path, JSON.stringify(users, null, 4));
  };

  update = async (data) => {
    const users = await this.read();
    users.push(data);
    await this.create(users);
  };

  remove = async () => {
    await fs.unlink(this.path);
  };

  updateOne = async (id, nameToUpdate) => {
    const users = await this.read();
    const idx = users.findIndex((user) => user.id === id);
    if (idx === -1) {
      console.log(`User with ID ${id} not found`);
      return false;
    }
    users[idx].name = nameToUpdate;
    await this.create(users);
  };

  removeOne = async (id) => {
    const users = await this.read();
    const idx = users.findIndex((user) => user.id === id);
    if (idx === -1) {
      console.log(`User with ID ${id} not found`);
      return false;
    }
    users.splice(idx, 1);
    console.log(users);

    await this.create(users);
  };
}

const file = new FileOperations(usersPath);
const users = [
  {
    id: "1",
    name: "Anton",
  },
  {
    id: "2",
    name: "Vika",
  },
  {
    id: "3",
    name: "Oleksandra",
  },
  {
    id: "4",
    name: "Dima",
  },
];
// file.read(); //Зчитує зміст файла users.json та повертає проміс.

// file.display(); //Виводить в консоль вміст файла users.json.

// file.create(users); // Створює повністю з нуля файл users.json.

// file.update({
//   id: "5",
//   name: "Andriy",
// }); //Додає нового користувача в кінкець масива.

// file.remove(); // Повністю видаляє весь файл users.json.

// file.updateOne("2", "Vika Kozlova"); // Шукає користувача по ID та оновлює ім'я.

// file.removeOne("2"); // Шукає користувача по ID та повністю його видаляє з масиву.

async function errorHandler(clb, ...args) {
  try {
    if (args) {
      await clb(...args);
    } else {
      await clb();
    }
  } catch (error) {
    console.log(`Anton custom: ${error.message}`);
  }
}

// errorHandler(file.display);

// errorHandler(() => file.removeOne("3"));

// errorHandler(file.removeOne, "1");

errorHandler(file.updateOne, "4", "Dima++");

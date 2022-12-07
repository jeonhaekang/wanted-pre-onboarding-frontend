import BaseModel from "./BaseModel";

class AccountModel extends BaseModel {
  path = "auth";

  join(data) {
    return this.post({
      path: `${this.path}/signup`,
      data,
    });
  }

  login(data) {
    return this.post({
      path: `${this.path}/signin`,
      data,
    });
  }
}

export default AccountModel;

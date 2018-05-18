export class Users {

    private _id:  number;
    public name: string;
    private _email: string;
    private _phone: string;
    private _password: string;
    public active: boolean;
    private _remember_token: string;
    public created_at: Date;
    public updated_at: Date;

    constructor() {

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get remember_token(): string {
        return this._remember_token;
    }

    set remember_token(value: string) {
        this._remember_token = value;
    }
}

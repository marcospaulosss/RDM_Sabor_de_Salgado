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

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get phone(): string {
        return this._phone;
    }

    public set phone(value: string) {
        this._phone = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

    public get remember_token(): string {
        return this._remember_token;
    }

    public set remember_token(value: string) {
        this._remember_token = value;
    }
}

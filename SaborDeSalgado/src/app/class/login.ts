export class Login {
    private _type: string;
    private _client_id: number;
    private _client_secret: string;

    constructor() {

    }


    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get client_id(): number {
        return this._client_id;
    }

    set client_id(value: number) {
        this._client_id = value;
    }

    get client_secret(): string {
        return this._client_secret;
    }

    set client_secret(value: string) {
        this._client_secret = value;
    }
}

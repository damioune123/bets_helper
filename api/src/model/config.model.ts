type ApiConfig = {
    url: string;
    headers: {[key: string]: string}
}

type Config  = {
    api: {
        apiFootball: ApiConfig
    },
    server: {
        port: number
    }
}

export default Config;
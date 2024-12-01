module.exports = {
    apps: [{
        name: "app1",
        script: "./server.js",
        error_file: "./err.log",
        out_file: "./out.log",
        "instances": 4,
        "exec_mode": "cluster"
    }]
}
DROP DATABASE IF EXISTS rickrollapi;

CREATE DATABASE rickrollapi;

USE rickrollapi;

DROP TABLE IF EXISTS rickrolls;

CREATE TABLE rickrolls (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    rickroll_link VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO rickrolls (name, description, rickroll_link)
VALUES (
    "First rickroll",
    "If you are seeing this, you are successfully been rickrolled!",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
);
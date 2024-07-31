CREATE TABLE user_table
    (id uuid not null,
     age integer not null,
     name varchar(255),
     nickname varchar(255),
     primary key (id)
    );

INSERT INTO user_table (id, age, name, nickname)
VALUES ('00000000-0000-0000-0000-000000000000', 10,  'testUser1', 'tes-kun1'),
       ('00000000-0000-0000-0000-000000000001', 20,  'testUser2', 'tes-kun2'),
       ('00000000-0000-0000-0000-000000000002', 30,  'testUser3', 'tes-kun3');

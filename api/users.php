<?php
header('Content-Type: application/json; charset=utf-8');

$users = [
    [
        'id' => 1,
        'name' => 'Ahmed Mohamed',
        'email' => 'ahmed@example.com',
        'bio' => 'Frontend developer who loves building clean user interfaces.'
    ],
    [
        'id' => 2,
        'name' => 'Sara Ali',
        'email' => 'sara@example.com',
        'bio' => 'UI/UX designer passionate about creating great user experiences.'
    ],
    [
        'id' => 3,
        'name' => 'Omar Hassan',
        'email' => 'omar@example.com',
        'bio' => 'Backend developer interested in APIs and web technologies.'
    ],
    [
        'id' => 4,
        'name' => 'Mona Khaled',
        'email' => 'mona@example.com',
        'bio' => 'Full-stack developer who enjoys learning new technologies.'
    ]
];

echo json_encode($users, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
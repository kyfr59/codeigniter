<!doctype html>
<html>
<head>
    <title>My Layout</title>
</head>
<body>
    <?= $this->include('header') ?>
    <?= $this->renderSection('content') ?>
    <?= $this->include('footer') ?>
</body>
</html>
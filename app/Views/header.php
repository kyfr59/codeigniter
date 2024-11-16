<?php if ($user = auth()->user()): ?>
    <a href="<?= url_to('logout') ?>"><?= lang('Auth.logout') ?></a></p>
<?php else: ?>
    <a href="<?= url_to('login') ?>"><?= lang('Auth.login') ?></a></p>
<?php endif ?>
<link rel="stylesheet" href="css/index.min.css">
<script src="js/index.min.js"></script>
<h1>HEADER</h1>

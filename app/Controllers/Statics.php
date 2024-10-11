<?php

namespace App\Controllers;

class Statics extends BaseController
{
    public function legalNotices(): string
    {
        return view('/statics/legal-notices');
    }
}

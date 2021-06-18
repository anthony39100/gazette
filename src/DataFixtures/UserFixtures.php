<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername("toto")
            ->setPassword(password_hash('toto39100', PASSWORD_DEFAULT));
        $manager->persist($user);

        $manager->flush();
    }
}

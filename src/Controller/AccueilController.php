<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Categorie;
use App\Form\RegisterType;


use App\Repository\ArticleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AccueilController extends AbstractController
{
    /**
     * @Route("/", name="accueil")
     */
    public function index(ArticleRepository $article): Response
    {
        $articleNouveauté=$article->findAll();
        return $this->render('accueil/index.html.twig', [
            'controller_name' => 'AccueilController',
            'articles'=>$articleNouveauté
        ]);
    }
    
    }


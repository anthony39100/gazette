<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Categorie;
use App\Form\RegisterType;


use App\Repository\ArticleRepository;
use App\Repository\CategorieRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AccueilController extends AbstractController
{
    /**
     * @Route("/", name="accueil")
     */
    public function index(ArticleRepository $article,CategorieRepository $categorie): Response
    {
        $articleNouveauté=$article->findOneBy(['categorie'=>2],['date'=>'DESC']);
         //J'aimerais recupere mes articles par son nom de categorie mais le nom de la categorie se trouve dans une entity differente 
         $categorie=$categorie->findBy(['nomCategorie'=>"films"]);
     
        return $this->render('accueil/index.html.twig', [
            'controller_name' => 'AccueilController',
            'article'=>$articleNouveauté,
            'categories'=> $categorie
        ]);
    }
    /**
     * @Route("/article/{categorie}/{id}",name="article")
     */
    public function Article(){
        return $this->render('article.html.twig');
    }
    }


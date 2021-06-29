<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use App\Entity\Categorie;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Gazette');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToCrud('Article', 'fa fa-home',Article::class);
    yield MenuItem::linkToCrud('Categorie', 'fa fa-home',Categorie::class);
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}

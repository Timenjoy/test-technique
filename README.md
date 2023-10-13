# Test Technique Timenjoy

> 🚀 Test technique pour le poste de développeur fullstack React / Node.js chez Timenjoy.

## Introduction

Bonjour et bienvenue sur ce test technique. Ce test a pour but de nous permettre d'évaluer vos compétences en développement web backend. Pour ce test, vous devez utiliser une API externe, symbolisée par le fichier `src/services/external.ts` pour récupérer des événements supplémentaires et les ajouter à la base de données. 

Vous devez dans un premier temps faire correspondre les champs de l'API externe avec ceux de l'API interne. Vous rejetterez les événements qui ne correspondent pas à une catégorie existante. Enfin, vous insérerez les événements dans la base de données en faisant attention à ne pas créer de doublons. Le processus de récupération des événements doit être déclenché manuellement par une requête HTTP sur un endpoint que vous ajouterez à l'API.

## Architecture actuelle

Le backend est une API REST (simplifiée pour les besoins de ce test). Il expose des endpoints qui permettent de créer et lire des événements ainsi que de récupérer une liste de catégories. Il est composé des endpoints suivants :

- `GET  /events`: Liste des événements
- `GET  /events/:id`: Détail d'un événement
- `GET  /categories`: Liste des catégories
- `GET  /health`: Health check indiquant que l'API fonctionne correctement

Vous devrez donc vous familiariser avec le code existant et ajouter les fonctionnalités demandées. Vous êtes libre d'ajouter des packages supplémentaires si vous le souhaitez tant que cela ne change pas le fonctionnement du reste de l'application et que vous pouvez justifier votre choix.

## Technos utilisées

- **Express**: [Framework NodeJS](https://expressjs.com/)
- **SQLite**: [Base de données](https://www.sqlite.org/index.html)
- **Zod**: [Validation des données](https://zod.dev)
- **Knex**: [SQL Query Builder](https://knexjs.org/)

## Rendu du test 📦

Vous devez nous faire parvenir le test sous forme d'une archive zip contenant l'ensemble du code source de l'application à l'adresse [emmanuel@timenjoy.fr](mailto:emmanuel@timenjoy.fr). Vous pouvez l'envoyer directement par mail ou utiliser n'importe quel service de partage de fichier (ex: WeTransfer) pour nous envoyer le fichier.

❗ Pensez à exclure le dossier `node_modules` de l'archive.

---

**Date de création du test**: 09/10/2023

<?php

require_once("Database.php");

class User extends Database {
    public function register($login, $password) {
        $password = password_hash($password, PASSWORD_BCRYPT);
        try {
            $query = $this->pdo->prepare("INSERT INTO user (login, password) VALUES (:login, :password)");
            $query->bindValue(':login', $login, PDO::PARAM_STR);
            $query->bindValue(':password', $password, PDO::PARAM_STR);
            $query->execute();

            return 'goood';
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function login($login, $password) {
        try {
            
            $login = htmlspecialchars(trim($login)); // securité
            $password = htmlspecialchars(trim($password));

            $query = $this->pdo->prepare('SELECT id, login, password FROM user WHERE login = :login'); 
            $query->bindValue(':login', $login, PDO::PARAM_STR);
            $query->execute();

            $result = $query->fetch(PDO::FETCH_ASSOC);

                if (!$result)
                {
                    return 'Utilisateur non trouvé';
                }

                if (password_verify($password, $result['password'])) 
                {

                    return $result;

                } else {
                    return 'Mot de passe incorrect';
                }

        } catch (\Throwable $th) {
            throw $th;
        }
    }

}

/* vérifier que user existe en BDD. query = select POST
vérifier que login et mdp ok. 
si c'est bon envoyé vers account + welcome "user.login". GET */   
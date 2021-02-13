-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 03-Fev-2021 às 21:23
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--
CREATE DATABASE IF NOT EXISTS `fseletro` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `fseletro`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE `comentarios` (
  `id_comentarios` int(11) NOT NULL,
  `idproduto` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `comentarios`:
--   `idproduto`
--       `produto` -> `idproduto`
--

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id_comentarios`, `idproduto`, `nome`, `msg`, `data`) VALUES
(1, 1, 'Amanda', 'Amei a geladeira', '2020-12-10 23:17:31'),
(2, 11, 'Anonimous', 'Péssimo', '2020-12-10 23:18:03'),
(3, 3, 'Matheus', 'Não gostei', '2020-12-11 17:37:35');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE `pedidos` (
  `idpedido` int(11) NOT NULL,
  `nome_cliente` varchar(80) NOT NULL,
  `endereco_cliente` varchar(200) NOT NULL,
  `email_cliente` varchar(100) NOT NULL,
  `nome_produto` varchar(150) NOT NULL,
  `valorunitario` decimal(8,2) DEFAULT NULL,
  `quantidade` int(4) NOT NULL,
  `valortotal` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `pedidos`:
--

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`idpedido`, `nome_cliente`, `endereco_cliente`, `email_cliente`, `nome_produto`, `valorunitario`, `quantidade`, `valortotal`) VALUES
(11, 'Amanda Regina', 'Rua Frei João, 3 - Ipiranga, SP', 'amanda@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 2, NULL),
(12, 'Matheus Moreira', 'Rua João Vicente, 1080 - Jardim Moura - SP', 'matheus@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 1, NULL),
(13, 'Felipe Dias', 'Avenida Martins Fontes, 536 - Jardim Silvana - SP', 'felipedias@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 3, NULL),
(14, 'Ana Luiza Santos', 'Rua Maria Marcolina, 123 - Vila Endres -SP', 'ana@recode.com', 'Lavadora de Roupas Philco Inverse', NULL, 1, NULL),
(15, 'Harry Potter', 'Travessa do Tranco, 456 - Hogsmeade - LDN', 'harry@recode.com', 'Lava-Louças Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', NULL, 2, NULL),
(16, 'Lilian Potter', 'Travessa do Tranco, 456 - Hogsmeade - LDN', 'lilian@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 1, NULL),
(17, 'Lilian Potter', 'Travessa do Tranco, 456 - Hogsmeade - LDN', 'lilian@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 1, NULL),
(18, 'Lilian Potter', 'Travessa do Tranco, 456 - Hogsmeade - LDN', 'lilian@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 1, NULL),
(19, 'Lilian Potter', 'Travessa do Tranco, 456 - Hogsmeade - LDN', 'lilian@recode.com', 'Geladeira Frost Free Consul Prata 340 litros', NULL, 1, NULL),
(21, '', 'ds', 'asaa', 'asfg', '12.00', 2, '3.00'),
(22, '', 'ds', 'asaa', 'asfg', '12.00', 2, '3.00'),
(23, '', 'sdf', 'ghk', 'ghjk', '123.00', 1, '66.00'),
(24, '', 'Patricio Gomes de Menezes', 'amanda.regina.200740@gmail.com', 'Geladeira Frost Free Brastemp Inverse 540 litros', '1.00', 1, '1.00'),
(25, '', 'jhgf', 'gfds', 'Lava-Louças Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', '3.00', 1, '9.00'),
(26, 'mnbvc', 'mnbv', 'mnbv', 'Micro-ondas Consul 32 Litros Inox 220V', '5.00', 2, '1.00'),
(27, 'asd', 'df', 'gd', 'Geladeira Frost Free Brastemp Inverse 540 litros', '1.00', 1, '1.00'),
(28, 'undefined', 'undefined', 'undefined', 'undefined', '0.00', 0, NULL),
(29, 'undefined', 'undefined', 'undefined', 'undefined', '0.00', 0, NULL),
(30, 'undefined', 'undefined', 'undefined', 'undefined', '0.00', 0, NULL),
(31, 'undefined', 'undefined', 'undefined', 'undefined', '0.00', 0, NULL),
(32, 'undefined', 'undefined', 'undefined', 'undefined', '0.00', 0, '0.00'),
(33, 'Amanda', 'rua um', 'amanda.com', 'Geladeira Frost Free Consul Prata 340 litros', '1.00', 2, '3.00'),
(34, 'AAA', 'A', 'A', 'Geladeira Frost Free Consul Prata 340 litros', '1.00', 1, '3.00'),
(35, 'ytrd', 'gfd', 'asdf', 'Geladeira Frost Free Brastemp Inverse 540 litros', '1.00', 2, '3.00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

DROP TABLE IF EXISTS `produto`;
CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precofinal` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- RELACIONAMENTOS PARA TABELAS `produto`:
--

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `precofinal`, `imagem`) VALUES
(1, 'geladeiras', 'Geladeira Frost Free Brastemp Inverse 540 litros', '6389.00', '5019.00', 'geladeira%20bratemp%20540l.png'),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 litros', '2068.60', '1910.90', 'geladeira-brastemp-375l.jpg'),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 litros', '2100.00', '2069.00', 'consul%20geladeira.png'),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', '1200.00', '1129.00', 'fogao-consul.jpg'),
(5, 'fogao', 'Fogão 4 Bocas Atlas Monaco com Acendimento Automático', '600.00', '519.70', 'fogao%20atlas.png'),
(6, 'microondas', 'Micro-ondas Consul 32 Litros Inox 220V', '580.00', '409.88', 'microondas%20consul.png'),
(7, 'microondas', 'Micro-ondas 25L Espelhado Philco 220V', '508.70', '464.53', 'micro-ondas-philco.jpg'),
(8, 'microondas', 'Forno de Micro-ondas Eletrolux 20L Branco', '450.00', '436.05', 'microndas%20eletrolux.png'),
(9, 'lava-loucas', 'Lava-Louças Eletrolux Inox com 10 Serviços, 06 Programas de Lavagem e Painel Blue Touch', '3599.00', '2799.90', 'lava-loucas-eletrolux.jpg'),
(10, 'lava-loucas', 'Lava-Louças Compacta 8 Serviços Branca 127V Brastemp', '1970.50', '1730.61', 'lava%20lou%C3%A7as%20brastemp.png'),
(11, 'lavadora de roupas', 'Lavadora de Roupas Brastemp 11 kg com Turbo Perfonce Branca', '1600.00', '1214.10', '4751.jpg'),
(12, 'lavadora de roupas', 'Lavadora de Roupas Philco Inverse', '2399.90', '2179.90', 'Lavadora-de-roupas-philco.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentarios`),
  ADD KEY `fk_idproduto` (`idproduto`);

--
-- Índices para tabela `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedido`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`),
  ADD UNIQUE KEY `imagem` (`imagem`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_idproduto` FOREIGN KEY (`idproduto`) REFERENCES `produto` (`idproduto`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

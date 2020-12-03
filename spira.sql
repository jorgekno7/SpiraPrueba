-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-12-2020 a las 19:43:34
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spira`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaciondecursosporusuarios`
--

CREATE TABLE `asignaciondecursosporusuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `fk_u_id` int(11) NOT NULL,
  `fk_c_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `asignaciondecursosporusuarios`
--

INSERT INTO `asignaciondecursosporusuarios` (`id`, `fk_u_id`, `fk_c_id`, `created_at`, `updated_at`) VALUES
(2, 2, 2, '2020-12-03 10:02:24', '2020-12-03 23:36:43'),
(3, 7, 4, '2020-12-03 10:59:46', '2020-12-03 10:59:46'),
(4, 4, 3, '2020-12-03 23:30:05', '2020-12-03 23:30:05'),
(5, 5, 4, '2020-12-03 23:32:20', '2020-12-03 23:32:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(10) UNSIGNED NOT NULL,
  `c_nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_intensidadHoraria` int(11) NOT NULL,
  `c_estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `c_nombre`, `c_intensidadHoraria`, `c_estado`, `created_at`, `updated_at`) VALUES
(1, 'calculo 2', 8, 1, NULL, NULL),
(2, 'programacion web', 10, 1, NULL, NULL),
(3, 'pob', 12, 1, NULL, NULL),
(4, 'estadistica', 6, 1, NULL, NULL),
(5, 'ingles', 6, 1, NULL, NULL),
(6, 'logica de programacion', 12, 1, NULL, NULL),
(9, 'cada', 2, 1, '2020-12-03 08:21:02', '2020-12-03 08:21:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_12_02_021011_create_cursos_table', 1),
(2, '2020_12_02_021045_create_usuarios_table', 1),
(3, '2020_12_02_021137_create_asignaciondecursosporusuarios_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `u_nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_telefono` int(11) NOT NULL,
  `u_perfil` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `u_estado` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `u_nombre`, `u_email`, `u_password`, `u_telefono`, `u_perfil`, `u_estado`, `created_at`, `updated_at`) VALUES
(2, 'Jenko Trujillo', 'jenko@hotmail.com', 'jenko23', 319078990, 'alumno', 1, NULL, NULL),
(3, 'David Quemba', 'quemba@gmail.com', 'quemba45', 312318762, 'administrador', 1, NULL, NULL),
(4, 'Bryan Silva', 'Bryan@gmail.com', 'Bryan39', 315431376, 'alumno', 1, NULL, NULL),
(5, 'Julio Forero', 'julio@hotmail.com', 'julio123', 316905399, 'alumno', 1, NULL, NULL),
(6, 'Jorge Cano', 'jorge@hotmail.com', 'jorge07', 315359517, 'administrador', 1, NULL, NULL),
(7, 'Ragnar Cano', 'Ragnar47@hotmail.com', 'Alaskan70', 313243592, 'alumno', 1, NULL, NULL),
(8, 'Sergio Rodriguez', 'sergio@hotmail.com', 'sergio06', 315359587, 'alumno', 1, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignaciondecursosporusuarios`
--
ALTER TABLE `asignaciondecursosporusuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignaciondecursosporusuarios`
--
ALTER TABLE `asignaciondecursosporusuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

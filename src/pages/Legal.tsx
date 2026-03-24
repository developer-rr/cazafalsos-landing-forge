import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useParams, Link } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

interface LegalDoc {
  title: Record<"es" | "pt", string>;
  updated: Record<"es" | "pt", string>;
  body: Record<"es" | "pt", string>;
  seoTitle: Record<"es" | "pt", string>;
  seoDesc: Record<"es" | "pt", string>;
}

const PRIVACY_ES = `**Controlador de Datos:** VENTOS ARQUEÁVEIS UNIPESSOAL LDA
**Dirección Registrada:** Lisboa, Portugal
**Email de Contacto:** privacy@cazafalsos.com
**Legislación Aplicable:** Portugal (RGPD), LGPD (Brasil), LFPDPPP (México), Ley 25.326 (Argentina), LPPD (Chile), Ley 1581 (Colombia), Ley 29733 (Perú)
**Autoridad de Supervisión:** CNPD (Portugal), ANPD (Brasil), Secretaría de ACGG (México)

---

## 1. Introducción

VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("nosotros", "nuestro" o "la Empresa") opera CazaFalsos — Protección de Marca ("la Extensión" o "el Servicio"), una extensión de navegador Chrome diseñada para ayudar a los titulares de marcas a detectar publicaciones de productos falsificados e infractores en Mercado Libre / Mercado Livre en seis países latinoamericanos: México, Brasil, Argentina, Chile, Colombia y Perú.

Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos sus datos personales cuando instala y utiliza CazaFalsos. Está diseñada para cumplir con los siguientes marcos regulatorios:

- Reglamento General de Protección de Datos (RGPD) — Reglamento (UE) 2016/679
- Lei Geral de Proteção de Dados (LGPD) — Lei 13.709/2018 (Brasil)
- Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) — marzo 2025 (México)
- Ley de Protección de los Datos Personales No. 25.326 (Argentina)
- Ley 19.628 / Ley 21.719 (LPPD) sobre Protección de Datos Personales (Chile)
- Ley Estatutaria 1581 de 2012 sobre Protección de Datos Personales (Colombia)
- Ley 29733, Ley de Protección de Datos Personales, y Decreto Supremo No. 016-2024-JUS (Perú)
- Políticas del Programa para Desarrolladores de Chrome Web Store de Google

Cuando las leyes locales le otorguen derechos adicionales más allá de los descritos en este documento, dichos derechos se le aplicarán en su totalidad.

## 2. Datos que Recopilamos

### 2.1 Datos que Usted Proporciona Directamente

Cuando utiliza CazaFalsos, puede proporcionar la siguiente información:

- **Información de Marca:** Nombres de marca, palabras clave, precios promedio de productos e imágenes de logotipos de marca (para análisis de hash perceptual) que registra para monitoreo.
- **Claves API (Modelo BYOK):** Si elige utilizar el análisis asistido por IA, usted proporciona sus propias claves API para OpenAI, Anthropic y/o Hugging Face. Estas claves se cifran localmente utilizando AES-256-GCM con derivación de clave PBKDF2 (100.000 iteraciones).
- **Lista de Seguimiento de Vendedores:** Nombres de vendedores que elige monitorear, notas opcionales y URLs de productos.
- **Programaciones de Escaneo:** Consultas de búsqueda, selecciones de país, intervalos de escaneo y umbrales de alerta que configura.
- **Registro de Consentimiento:** Su estado de consentimiento de privacidad y marca de tiempo, registrados durante el proceso de incorporación. Además, al suscribirse a un plan de pago, ExtensionPay/Stripe recopila su dirección de correo electrónico para la gestión de suscripciones y el procesamiento de pagos.

### 2.2 Datos Recopilados Automáticamente

CazaFalsos procesa automáticamente los siguientes datos exclusivamente de páginas web de Mercado Libre / Mercado Livre (y de ningún otro sitio web):

- **Datos de Productos:** Títulos de productos, precios, monedas, nombres de vendedores, descripciones de productos, imágenes (URLs) e identificadores de productos extraídos de elementos DOM de Mercado Libre.
- **URLs de Páginas:** Solo URLs de páginas de Mercado Libre que visita, según se define en las host_permissions del manifiesto de la Extensión.
- **Capturas de Pantalla:** Capturas de pantalla de pestañas capturadas mediante chrome.tabs.captureVisibleTab() cuando inicia explícitamente la recopilación de pruebas.
- **Resultados de Análisis:** Puntuaciones de sospecha, indicadores de detección (TEXT_MATCH, JARGON, PRICE_ANOMALY, IMAGE_MATCH, HOMOGLYPH, SELLER_WATCHLIST) y marcas de tiempo.
- **Estadísticas de Uso:** Estadísticas agregadas y no personales (total de escaneos, detecciones, cantidad de pruebas, desgloses por plataforma y país, conteo mensual de escaneos) almacenadas solo localmente.

### 2.3 Datos que NO Recopilamos

CazaFalsos no recopila ni procesa:

- Su nombre real ni identificadores emitidos por el gobierno. Nota: ExtensionPay/Stripe recopila su dirección de correo electrónico cuando se suscribe a un plan de pago.
- Historial de navegación fuera de los dominios de Mercado Libre.
- Identificadores de navegador o dispositivo, huellas digitales ni datos de telemetría.
- Información de pago o financiera (el procesamiento de pagos es manejado íntegramente por Stripe a través de ExtensionPay).
- No se emplean análisis externos, píxeles de seguimiento, cookies ni telemetría de ningún tipo.

## 3. Bases Legales para el Procesamiento

Procesamos datos personales sobre las siguientes bases legales, mapeadas a cada marco regulatorio aplicable:

| Actividad de Procesamiento | RGPD (Art. 6) | LGPD (Brasil) | LFPDPPP (México) |
|---|---|---|---|
| Monitoreo y análisis de marca | Ejecución del contrato (Art. 6(1)(b)) | Ejecución del contrato (Art. 7, V) | Consentimiento / Contrato |
| Recopilación de pruebas | Interés legítimo (Art. 6(1)(f)) | Interés legítimo (Art. 7, IX) | Consentimiento |
| Procesamiento BYOK AI | Consentimiento (Art. 6(1)(a)) | Consentimiento (Art. 7, I) | Consentimiento expreso |
| Gestión de suscripción | Ejecución del contrato (Art. 6(1)(b)) | Ejecución del contrato (Art. 7, V) | Contrato |

Para Argentina (Ley 25.326), Chile (Ley 19.628/LPPD), Colombia (Ley 1581) y Perú (Ley 29733), el procesamiento de datos se basa en su consentimiento explícito proporcionado durante el proceso de incorporación y, cuando corresponda, en la ejecución del contrato del Servicio.

## 4. Finalidades del Procesamiento de Datos

Procesamos sus datos exclusivamente para las siguientes finalidades:

- **Prestación del Servicio Principal:** Escaneo de publicaciones de productos en Mercado Libre en busca de posibles infracciones de marca, indicadores de falsificación, detección de jerga, anomalías de precios y análisis de similitud visual.
- **Recopilación y Preservación de Pruebas:** Captura de pantallas, cálculo de hashes criptográficos SHA-256 y obtención de marcas de tiempo en blockchain (OpenTimestamps) para crear pruebas a prueba de manipulación de las infracciones detectadas.
- **Generación de Reportes:** Generación de URLs pre-completadas para las páginas de envío de denuncias de Mercado Libre y mantenimiento de un historial de reportes para su referencia.
- **Análisis Asistido por IA (BYOK):** Cuando opta por participar y proporciona sus propias claves API, se transmiten metadatos limitados del producto (título, nombre del vendedor, precio, moneda, país, nombre de marca) al proveedor de IA que elija para una evaluación avanzada de probabilidad de falsificación.
- **Gestión de Suscripciones:** Cuando se suscribe a un plan de pago, ExtensionPay y Stripe procesan su dirección de correo electrónico, plan de suscripción, método de pago (los datos de la tarjeta son manejados exclusivamente por Stripe y nunca son accesibles para nosotros), fechas de facturación, estado de pago e historial de transacciones. Estos datos se almacenan en los servidores de ExtensionPay y Stripe, no localmente en la Extensión.

## 5. Modelo BYOK: Sus Claves API y Proveedores de IA de Terceros

CazaFalsos emplea un modelo Bring Your Own Key (BYOK) para las funciones de análisis con IA. Esta sección explica cómo este modelo afecta sus datos.

### 5.1 Cómo Funciona BYOK

Usted proporciona sus propias claves API para uno o más de los siguientes proveedores: OpenAI (GPT-4o-mini, GPT-4o), Anthropic (Claude 3 Haiku, Sonnet) y Hugging Face (modelos CLIP). Estas claves se cifran localmente usando AES-256-GCM a través de la Web Crypto API con derivación de clave PBKDF2 (100.000 iteraciones, SHA-256). La frase de cifrado es única para cada instalación de la Extensión.

### 5.2 Datos Transmitidos a Proveedores de IA

Cuando inicia un análisis asistido por IA, los siguientes datos se transmiten directamente desde su navegador al proveedor de IA usando su clave: título del producto, nombre del vendedor, precio, moneda, país y nombre de su marca. Los siguientes datos NUNCA se transmiten a proveedores de IA: imágenes de productos (excepto a Hugging Face para análisis CLIP), URLs, capturas de pantalla, su correo electrónico ni ningún identificador personal.

### 5.3 Su Responsabilidad

Al utilizar el modelo BYOK, usted es el controlador de datos para la transmisión de datos a su proveedor de IA elegido. Usted es el único responsable del cumplimiento de los términos de servicio, las políticas de uso aceptable y los acuerdos de procesamiento de datos del proveedor de IA. No almacenamos, procesamos ni tenemos acceso al contenido transmitido a través de sus claves API. Nota sobre la Ley de IA de la UE: CazaFalsos utiliza modelos de IA para la evaluación de probabilidad de falsificación. De conformidad con el Artículo 50 del Reglamento (UE) 2024/1689 (Ley de IA), vigente a partir del 2 de agosto de 2026, divulgaremos claramente en la interfaz de la Extensión que los resultados del análisis son generados por IA y no deben utilizarse como base única para acciones legales. Los usuarios deben verificar de forma independiente todas las evaluaciones generadas por IA antes de tomar cualquier acción. Recomendamos encarecidamente revisar las políticas de privacidad de OpenAI (https://openai.com/privacy), Anthropic (https://www.anthropic.com/privacy) y Hugging Face (https://huggingface.co/privacy) antes de proporcionar sus claves API.

## 6. Almacenamiento y Retención de Datos

### 6.1 Arquitectura de Almacenamiento Local

La mayoría de los datos procesados por CazaFalsos se almacenan en su dispositivo local usando mecanismos de almacenamiento del navegador. La excepción son los datos de suscripción (correo electrónico, estado del plan, historial de pagos), que son procesados y almacenados por ExtensionPay y Stripe. Los mecanismos de almacenamiento local incluyen:

- **chrome.storage.local:** Configuraciones, configuraciones de marca, claves API cifradas, estado de licencia, historial de escaneos (limitado a 100 entradas con rotación FIFO automática), estadísticas agregadas, estado de incorporación y programaciones de escaneo.
- **IndexedDB (base de datos: cazafalsos_db):** Registros de evidencia (con hashes SHA-256 y pruebas opcionales de OpenTimestamps), incrustaciones de marca, lista de seguimiento de vendedores e historial de reportes.

Con la excepción de los datos de suscripción y pago procesados por ExtensionPay/Stripe, ningún dato se transmite ni almacena en nuestros servidores o en la infraestructura de la Empresa, ni en ningún servicio en la nube de terceros (excepto cuando opta explícitamente por usar el análisis BYOK AI, en cuyo caso los datos se transmiten directamente al proveedor de IA que seleccionó).

### 6.2 Períodos de Retención

- **Historial de Escaneos:** Limitado automáticamente a las 100 entradas más recientes (las entradas más antiguas se eliminan mediante rotación FIFO).
- **Contador de Escaneos Mensuales:** Se reinicia automáticamente al inicio de cada mes calendario.
- **Evidencia, Lista de Seguimiento, Reportes, Marcas:** Se conservan hasta que los elimine manualmente, desinstale la Extensión o borre los datos de su navegador.
- **Claves API:** Se conservan en forma cifrada hasta que las elimine a través de la configuración o use la función "Eliminar mis datos".

### 6.3 Eliminación de Datos

Puede eliminar permanentemente todos sus datos en cualquier momento haciendo clic en "Eliminar mis datos" en la página de opciones de la Extensión (sección Acerca de). Esta acción requiere doble confirmación y borra irreversiblemente todos los datos de chrome.storage.local y todos los almacenes de IndexedDB. Tenga en cuenta que los períodos de prueba no se restauran después de la eliminación de datos.

## 7. Compartición de Datos con Terceros

CazaFalsos comparte datos con los siguientes terceros, exclusivamente en las circunstancias descritas:

| Tercero | Datos Compartidos | Finalidad | Base Legal / Notas |
|---|---|---|---|
| OpenAI (EE.UU.) | Título del producto, vendedor, precio, moneda, país, nombre de marca | Análisis de falsificación por IA | Solo BYOK. Iniciado por el usuario. Su clave, su relación como controlador. |
| Anthropic (EE.UU.) | Igual que OpenAI | Análisis de falsificación por IA | Solo BYOK. Iniciado por el usuario. |
| Hugging Face (EE.UU.) | Imágenes de productos (blob), etiquetas de texto | Coincidencia visual CLIP | Solo BYOK. Iniciado por el usuario. |
| OpenTimestamps (Público) | Solo hash SHA-256 (64 caracteres hexadecimales) | Sellado de tiempo en blockchain | No se transmiten datos personales. Solo hash criptográfico. |
| ExtensionPay / Stripe | Dirección de correo electrónico, plan de suscripción, estado de pago, fechas de facturación | Procesamiento de pagos | Activo. Base legal: ejecución del contrato (RGPD Art. 6(1)(b)); contrato (LGPD Art. 7, V); consentimiento (LFPDPPP). |

## 8. Transferencias Internacionales de Datos

Cuando utiliza las funciones de análisis BYOK AI, los metadatos de productos se transmiten a servidores en Estados Unidos (OpenAI, Anthropic, Hugging Face). Estas transferencias se realizan bajo las siguientes salvaguardas:

- **Para RGPD:** El Marco de Privacidad de Datos UE-EE.UU. (DPF), cuando corresponda, y las Cláusulas Contractuales Tipo (CCT) como mecanismo de respaldo según el Artículo 46(2)(c) RGPD.
- **Para LGPD (Brasil):** Cláusulas Contractuales Tipo aprobadas por la ANPD según la Resolución 19/2024. Los usuarios pueden solicitar el texto completo de las CCT dentro de 15 días.
- **Para LFPDPPP (México):** Las protecciones de transferencia transfronteriza garantizan que el receptor mantenga estándares de protección de datos equivalentes.
- **Para Argentina, Chile, Colombia, Perú:** Las transferencias se basan en su consentimiento explícito proporcionado durante la configuración BYOK y cumplen con los requisitos de adecuación o protección equivalente según las leyes respectivas.

Dado que las transferencias BYOK ocurren directamente desde su navegador al proveedor de IA usando su propia clave API, usted actúa como controlador de datos para esas transferencias específicas. Para datos de suscripción, ExtensionPay (EE.UU.) y Stripe Inc. (EE.UU.) procesan su correo electrónico e información de pago en servidores en Estados Unidos. Estas transferencias están protegidas por el Marco de Privacidad de Datos UE-EE.UU. (Stripe es un participante certificado), Cláusulas Contractuales Tipo y salvaguardas equivalentes bajo LGPD y LFPDPPP.

## 9. Derechos del Titular de los Datos

Dependiendo de su jurisdicción, tiene los siguientes derechos respecto a sus datos personales:

### 9.1 Derechos RGPD (Usuarios UE/EEE)

Derecho de acceso (Art. 15), derecho de rectificación (Art. 16), derecho de supresión / derecho al olvido (Art. 17), derecho a la limitación del tratamiento (Art. 18), derecho a la portabilidad de datos (Art. 20), derecho de oposición (Art. 21), derechos relacionados con la toma de decisiones automatizadas y la elaboración de perfiles (Art. 22), y derecho a retirar el consentimiento en cualquier momento.

### 9.2 Derechos LGPD (Usuarios Brasileños)

Derecho a confirmación y acceso (Art. 18, I-II), derecho de corrección (Art. 18, III), derecho a anonimización, bloqueo o eliminación de datos innecesarios (Art. 18, IV), derecho a la portabilidad de datos (Art. 18, V), derecho a información sobre terceros con quienes se comparten los datos (Art. 18, VII), derecho a revocar el consentimiento (Art. 18, IX). Plazo de respuesta: Confirmación simplificada inmediatamente; acceso detallado dentro de 15 días.

### 9.3 Derechos ARCO (Usuarios Mexicanos)

Bajo la LFPDPPP (2025), usted tiene los derechos de Acceso, Rectificación, Cancelación y Oposición (derechos ARCO). También puede oponerse al procesamiento automatizado que afecte significativamente sus derechos o libertades. Las solicitudes se atienden a través de la Secretaría de Anticorrupción y Buen Gobierno.

### 9.4 Derechos bajo la Ley Argentina, Chilena, Colombiana y Peruana

**Argentina (Ley 25.326):** Derecho de acceso, rectificación, supresión y confidencialidad de datos personales. **Chile (LPPD):** Derecho de acceso, rectificación, cancelación, oposición y portabilidad de datos (vigente desde el 1 de diciembre de 2026). **Colombia (Ley 1581):** Derechos de acceso, actualización, rectificación, eliminación y revocación; quejas ante la SIC (Superintendencia de Industria y Comercio). **Perú (Ley 29733):** Derechos de acceso, rectificación, cancelación, oposición y portabilidad de datos; quejas ante la Autoridad Nacional de Protección de Datos Personales (ANPDP).

### 9.5 Cómo Ejercer Sus Derechos

Dado que todos los datos se almacenan localmente en su dispositivo, la mayoría de los derechos se pueden ejercer directamente a través de la interfaz de la Extensión: use la función "Eliminar mis datos" para la supresión, exporte evidencia en CSV/JSON para la portabilidad, y modifique los datos de marca/configuración para la rectificación. Para solicitudes formales, contacte a privacy@cazafalsos.com. Responderemos dentro del plazo requerido por su ley aplicable (30 días RGPD, 15 días LGPD, 20 días LFPDPPP).

## 10. Seguridad de los Datos

Implementamos las siguientes medidas técnicas y organizativas para proteger sus datos:

- **Cifrado:** Las claves API se cifran usando AES-256-GCM con derivación de clave PBKDF2 (100.000 iteraciones, SHA-256). Sal única de 16 bytes e IV de 12 bytes por operación de cifrado.
- **Sanitización de Entradas:** Todas las entradas del usuario se sanitizan contra ataques XSS usando escape de textContent basado en DOM. Validación de URL para todos los enlaces externos.
- **Seguridad de Transporte:** Todas las comunicaciones de API externas usan exclusivamente HTTPS. No existen endpoints HTTP en el código fuente.
- **Política de Seguridad de Contenido:** Las páginas de la Extensión aplican script-src 'self' 'wasm-unsafe-eval'; object-src 'self'.
- **Evidencia Criptográfica:** El hash SHA-256 de los datos de evidencia garantiza la integridad. OpenTimestamps proporciona prueba de existencia anclada en la blockchain de Bitcoin.
- **Permisos Mínimos:** La Extensión solicita solo los permisos estrictamente necesarios para su funcionalidad, limitados a los dominios de Mercado Libre.

## 11. Cookies y Tecnologías de Seguimiento

La extensión de navegador CazaFalsos no utiliza cookies, píxeles de seguimiento, balizas web ni ninguna forma de análisis externo. No se integran servicios de análisis de terceros (Google Analytics, Mixpanel, Amplitude o similares). Todas las estadísticas de uso se calculan y almacenan localmente en su dispositivo. Si operamos un sitio web (por ejemplo, cazafalsos.com), se aplicará una Política de Cookies separada a ese sitio web.

## 12. Privacidad de Menores

CazaFalsos es una herramienta empresarial destinada a ser utilizada por titulares de marcas, profesionales de propiedad intelectual y gestores de comercio electrónico. El Servicio no está dirigido a personas menores de 18 años (o 16 años para usuarios de la UE/EEE, o 13 años para usuarios brasileños según la Lei 58/2019 Art. 16(1)). No recopilamos conscientemente datos personales de menores. Si cree que un menor nos ha proporcionado datos, contacte a privacy@cazafalsos.com y tomaremos medidas inmediatas para eliminar dichos datos.

## 13. Cambios a Esta Política

Podemos actualizar esta Política de Privacidad periódicamente. Los cambios materiales se comunicarán a través de la interfaz de la Extensión (por ejemplo, mediante una notificación o un aviso de consentimiento actualizado). La fecha de "Última actualización" en la parte superior de este documento indica la revisión más reciente. El uso continuado de la Extensión después de los cambios constituye aceptación. Para los usuarios de la UE/EEE, los cambios materiales que afecten la base legal o el alcance del procesamiento requerirán un consentimiento renovado cuando corresponda.

## 14. Información de Contacto y Quejas

Para cualquier pregunta, inquietud o solicitud relacionada con esta Política de Privacidad o sus datos personales:

- **Email:** privacy@cazafalsos.com
- **Controlador de Datos:** VENTOS ARQUEÁVEIS UNIPESSOAL LDA, Lisboa, Portugal
- **Registrado en Portugal.** De conformidad con la ley portuguesa, el libro de reclamaciones electrónico (Livro de Reclamações Eletrónico) está disponible en www.livroreclamacoes.pt

Tiene derecho a presentar una queja ante la autoridad de supervisión correspondiente:

- **Portugal/UE:** CNPD — Comissão Nacional de Proteção de Dados (www.cnpd.pt)
- **Brasil:** ANPD — Autoridade Nacional de Proteção de Dados (www.gov.br/anpd)
- **México:** Secretaría de Anticorrupción y Buen Gobierno (SABG). Los consumidores mexicanos también pueden contactar a PROFECO (Procuraduría Federal del Consumidor) en www.gob.mx/profeco
- **Argentina:** AAIP — Agencia de Acceso a la Información Pública
- **Chile:** Agencia de Protección de Datos Personales (desde diciembre de 2026)
- **Colombia:** SIC — Superintendencia de Industria y Comercio
- **Perú:** ANPDP — Autoridad Nacional de Protección de Datos Personales

---

© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos los derechos reservados.
Este documento constituye una política de privacidad legalmente vinculante.`;

const PRIVACY_PT = `**Controlador de Dados:** VENTOS ARQUEÁVEIS UNIPESSOAL LDA
**Endereço Registrado:** Lisboa, Portugal
**E-mail de Contato:** privacy@cazafalsos.com
**Legislação Aplicável:** Portugal (RGPD), LGPD (Brasil), LFPDPPP (México), Ley 25.326 (Argentina), LPPD (Chile), Ley 1581 (Colômbia), Ley 29733 (Peru)
**Autoridade de Supervisão:** CNPD (Portugal), ANPD (Brasil), Secretaria de ACGG (México)

---

## 1. Introdução

VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("nós", "nosso" ou "a Empresa") opera o CazaFalsos — Protección de Marca ("a Extensão" ou "o Serviço"), uma extensão de navegador Chrome projetada para ajudar titulares de marcas a detectar anúncios de produtos falsificados e infratores no Mercado Libre / Mercado Livre em seis países latino-americanos: México, Brasil, Argentina, Chile, Colômbia e Peru.

Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos seus dados pessoais quando você instala e utiliza o CazaFalsos. Ela foi elaborada para cumprir os seguintes marcos regulatórios:

- Regulamento Geral sobre a Proteção de Dados (RGPD) — Regulamento (UE) 2016/679
- Lei Geral de Proteção de Dados (LGPD) — Lei 13.709/2018 (Brasil)
- Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) — março de 2025 (México)
- Ley de Protección de los Datos Personales No. 25.326 (Argentina)
- Ley 19.628 / Ley 21.719 (LPPD) sobre Proteção de Dados Pessoais (Chile)
- Ley Estatutaria 1581 de 2012 sobre Proteção de Dados Pessoais (Colômbia)
- Ley 29733, Ley de Protección de Datos Personales, e Decreto Supremo No. 016-2024-JUS (Peru)
- Políticas do Programa para Desenvolvedores da Chrome Web Store do Google

Quando as leis locais lhe concederem direitos adicionais além dos descritos neste documento, esses direitos se aplicarão a você integralmente.

## 2. Dados que Coletamos

### 2.1 Dados que Você Fornece Diretamente

Ao utilizar o CazaFalsos, você pode fornecer as seguintes informações:

- **Informações de Marca:** Nomes de marca, palavras-chave, preços médios de produtos e imagens de logotipos de marca (para análise de hash perceptual) que você registra para monitoramento.
- **Chaves de API (Modelo BYOK):** Se optar por usar a análise assistida por IA, você fornece suas próprias chaves de API para OpenAI, Anthropic e/ou Hugging Face. Essas chaves são criptografadas localmente usando AES-256-GCM com derivação de chave PBKDF2 (100.000 iterações).
- **Lista de Acompanhamento de Vendedores:** Nomes de vendedores que você escolhe monitorar, notas opcionais e URLs de produtos.
- **Agendamentos de Varredura:** Consultas de busca, seleções de país, intervalos de varredura e limites de alerta que você configura.
- **Registro de Consentimento:** Seu status de consentimento de privacidade e carimbo de data/hora, registrados durante o processo de integração. Além disso, ao assinar um plano pago, seu endereço de e-mail é coletado pelo ExtensionPay/Stripe para gestão de assinaturas e processamento de pagamentos.

### 2.2 Dados Coletados Automaticamente

O CazaFalsos processa automaticamente os seguintes dados exclusivamente de páginas da web do Mercado Libre / Mercado Livre (e de nenhum outro site):

- **Dados de Produtos:** Títulos de produtos, preços, moedas, nomes de vendedores, descrições de produtos, imagens (URLs) e identificadores de produtos extraídos de elementos DOM do Mercado Libre.
- **URLs de Páginas:** Apenas URLs de páginas do Mercado Libre que você visita, conforme definido nas host_permissions do manifesto da Extensão.
- **Capturas de Tela:** Capturas de tela de abas capturadas via chrome.tabs.captureVisibleTab() quando você inicia explicitamente a coleta de evidências.
- **Resultados de Análise:** Pontuações de suspeita, indicadores de detecção (TEXT_MATCH, JARGON, PRICE_ANOMALY, IMAGE_MATCH, HOMOGLYPH, SELLER_WATCHLIST) e carimbos de data/hora.
- **Estatísticas de Uso:** Estatísticas agregadas e não pessoais (total de varreduras, detecções, quantidade de evidências, detalhamentos por plataforma e país, contagem mensal de varreduras) armazenadas apenas localmente.

### 2.3 Dados que NÃO Coletamos

O CazaFalsos não coleta nem processa:

- Seu nome real ou identificadores emitidos pelo governo. Nota: seu endereço de e-mail é coletado pelo ExtensionPay/Stripe quando você assina um plano pago.
- Histórico de navegação fora dos domínios do Mercado Libre.
- Identificadores de navegador ou dispositivo, impressões digitais ou dados de telemetria.
- Informações de pagamento ou financeiras (o processamento de pagamentos é tratado inteiramente pelo Stripe através do ExtensionPay).
- Nenhum serviço de análise externo, pixels de rastreamento, cookies ou telemetria de qualquer tipo é utilizado.

## 3. Bases Legais para o Processamento

Processamos dados pessoais com base nas seguintes bases legais, mapeadas para cada marco regulatório aplicável:

| Atividade de Processamento | RGPD (Art. 6) | LGPD (Brasil) | LFPDPPP (México) |
|---|---|---|---|
| Monitoramento e análise de marca | Execução do contrato (Art. 6(1)(b)) | Execução do contrato (Art. 7, V) | Consentimento / Contrato |
| Coleta de evidências | Interesse legítimo (Art. 6(1)(f)) | Interesse legítimo (Art. 7, IX) | Consentimento |
| Processamento BYOK AI | Consentimento (Art. 6(1)(a)) | Consentimento (Art. 7, I) | Consentimento expresso |
| Gestão de assinatura | Execução do contrato (Art. 6(1)(b)) | Execução do contrato (Art. 7, V) | Contrato |

Para Argentina (Ley 25.326), Chile (Ley 19.628/LPPD), Colômbia (Ley 1581) e Peru (Ley 29733), o processamento de dados é baseado em seu consentimento explícito fornecido durante o processo de integração e, quando aplicável, na execução do contrato do Serviço.

## 4. Finalidades do Processamento de Dados

Processamos seus dados exclusivamente para as seguintes finalidades:

- **Prestação do Serviço Principal:** Varredura de anúncios de produtos no Mercado Libre em busca de possíveis infrações de marca, indicadores de falsificação, detecção de gírias, anomalias de preços e análise de similaridade visual.
- **Coleta e Preservação de Evidências:** Captura de telas, cálculo de hashes criptográficos SHA-256 e obtenção de carimbos de data/hora em blockchain (OpenTimestamps) para criar evidências à prova de adulteração das infrações detectadas.
- **Geração de Relatórios:** Geração de URLs pré-preenchidas para as páginas de envio de denúncias do Mercado Libre e manutenção de um histórico de relatórios para sua referência.
- **Análise Assistida por IA (BYOK):** Quando você opta por participar e fornece suas próprias chaves de API, metadados limitados do produto (título, nome do vendedor, preço, moeda, país, nome da marca) são transmitidos ao provedor de IA escolhido para uma avaliação avançada de probabilidade de falsificação.
- **Gestão de Assinaturas:** Quando você assina um plano pago, ExtensionPay e Stripe processam seu endereço de e-mail, plano de assinatura, método de pagamento (os dados do cartão são tratados exclusivamente pelo Stripe e nunca são acessíveis para nós), datas de faturamento, status de pagamento e histórico de transações. Esses dados são armazenados nos servidores do ExtensionPay e Stripe, não localmente na Extensão.

## 5. Modelo BYOK: Suas Chaves de API e Provedores de IA de Terceiros

O CazaFalsos emprega um modelo Bring Your Own Key (BYOK) para os recursos de análise com IA. Esta seção explica como esse modelo afeta seus dados.

### 5.1 Como o BYOK Funciona

Você fornece suas próprias chaves de API para um ou mais dos seguintes provedores: OpenAI (GPT-4o-mini, GPT-4o), Anthropic (Claude 3 Haiku, Sonnet) e Hugging Face (modelos CLIP). Essas chaves são criptografadas localmente usando AES-256-GCM via Web Crypto API com derivação de chave PBKDF2 (100.000 iterações, SHA-256). A frase de criptografia é única para cada instalação da Extensão.

### 5.2 Dados Transmitidos aos Provedores de IA

Quando você inicia uma análise assistida por IA, os seguintes dados são transmitidos diretamente do seu navegador ao provedor de IA usando sua chave: título do produto, nome do vendedor, preço, moeda, país e nome da sua marca. Os seguintes dados NUNCA são transmitidos aos provedores de IA: imagens de produtos (exceto para Hugging Face para análise CLIP), URLs, capturas de tela, seu e-mail ou quaisquer identificadores pessoais.

### 5.3 Sua Responsabilidade

Ao utilizar o modelo BYOK, você é o controlador de dados para a transmissão de dados ao seu provedor de IA escolhido. Você é o único responsável pelo cumprimento dos termos de serviço, políticas de uso aceitável e acordos de processamento de dados do provedor de IA. Não armazenamos, processamos nem temos acesso ao conteúdo transmitido através de suas chaves de API. Nota sobre a Lei de IA da UE: O CazaFalsos utiliza modelos de IA para avaliação de probabilidade de falsificação. De acordo com o Artigo 50 do Regulamento (UE) 2024/1689 (Lei de IA), em vigor a partir de 2 de agosto de 2026, divulgaremos claramente na interface da Extensão que os resultados da análise são gerados por IA e não devem ser utilizados como base única para ações legais. Os usuários devem verificar de forma independente todas as avaliações geradas por IA antes de tomar qualquer ação. Recomendamos fortemente revisar as políticas de privacidade da OpenAI (https://openai.com/privacy), Anthropic (https://www.anthropic.com/privacy) e Hugging Face (https://huggingface.co/privacy) antes de fornecer suas chaves de API.

## 6. Armazenamento e Retenção de Dados

### 6.1 Arquitetura de Armazenamento Local

A maioria dos dados processados pelo CazaFalsos é armazenada em seu dispositivo local usando mecanismos de armazenamento do navegador. A exceção são os dados de assinatura (e-mail, status do plano, histórico de pagamentos), que são processados e armazenados pelo ExtensionPay e Stripe. Os mecanismos de armazenamento local incluem:

- **chrome.storage.local:** Configurações, configurações de marca, chaves de API criptografadas, status de licença, histórico de varreduras (limitado a 100 entradas com rotação FIFO automática), estatísticas agregadas, status de integração e agendamentos de varredura.
- **IndexedDB (banco de dados: cazafalsos_db):** Registros de evidência (com hashes SHA-256 e provas opcionais de OpenTimestamps), embeddings de marca, lista de acompanhamento de vendedores e histórico de relatórios.

Com a exceção dos dados de assinatura e pagamento processados pelo ExtensionPay/Stripe, nenhum dado é transmitido ou armazenado em nossos servidores ou na infraestrutura da Empresa, ou em qualquer serviço de nuvem de terceiros (exceto quando você opta explicitamente por usar a análise BYOK AI, caso em que os dados são transmitidos diretamente ao provedor de IA que você selecionou).

### 6.2 Períodos de Retenção

- **Histórico de Varreduras:** Limitado automaticamente às 100 entradas mais recentes (entradas mais antigas são excluídas via rotação FIFO).
- **Contador Mensal de Varreduras:** Reiniciado automaticamente no início de cada mês calendário.
- **Evidências, Lista de Acompanhamento, Relatórios, Marcas:** Retidos até que você os exclua manualmente, desinstale a Extensão ou limpe os dados do navegador.
- **Chaves de API:** Retidas em forma criptografada até que você as exclua pelas configurações ou use a função "Eliminar meus dados".

### 6.3 Exclusão de Dados

Você pode excluir permanentemente todos os seus dados a qualquer momento clicando em "Eliminar meus dados" na página de opções da Extensão (seção Sobre). Esta ação requer confirmação dupla e apaga irreversivelmente todos os dados do chrome.storage.local e de todos os armazéns do IndexedDB. Observe que os períodos de teste não são restaurados após a exclusão de dados.

## 7. Compartilhamento de Dados com Terceiros

O CazaFalsos compartilha dados com os seguintes terceiros, exclusivamente nas circunstâncias descritas:

| Terceiro | Dados Compartilhados | Finalidade | Base Legal / Notas |
|---|---|---|---|
| OpenAI (EUA) | Título do produto, vendedor, preço, moeda, país, nome da marca | Análise de falsificação por IA | Apenas BYOK. Iniciado pelo usuário. Sua chave, sua relação como controlador. |
| Anthropic (EUA) | Igual à OpenAI | Análise de falsificação por IA | Apenas BYOK. Iniciado pelo usuário. |
| Hugging Face (EUA) | Imagens de produtos (blob), rótulos de texto | Correspondência visual CLIP | Apenas BYOK. Iniciado pelo usuário. |
| OpenTimestamps (Público) | Apenas hash SHA-256 (64 caracteres hexadecimais) | Carimbo de data/hora em blockchain | Nenhum dado pessoal transmitido. Apenas hash criptográfico. |
| ExtensionPay / Stripe | Endereço de e-mail, plano de assinatura, status de pagamento, datas de faturamento | Processamento de pagamentos | Ativo. Base legal: execução do contrato (RGPD Art. 6(1)(b)); contrato (LGPD Art. 7, V); consentimento (LFPDPPP). |

## 8. Transferências Internacionais de Dados

Quando você usa os recursos de análise BYOK AI, metadados de produtos são transmitidos a servidores nos Estados Unidos (OpenAI, Anthropic, Hugging Face). Essas transferências são realizadas sob as seguintes salvaguardas:

- **Para RGPD:** O Quadro de Privacidade de Dados UE-EUA (DPF), quando aplicável, e as Cláusulas Contratuais Padrão (CCP) como mecanismo alternativo conforme o Artigo 46(2)(c) RGPD.
- **Para LGPD (Brasil):** Cláusulas Contratuais Padrão aprovadas pela ANPD conforme a Resolução 19/2024. Os usuários podem solicitar o texto completo das CCP dentro de 15 dias.
- **Para LFPDPPP (México):** As proteções de transferência transfronteiriça garantem que o destinatário mantenha padrões de proteção de dados equivalentes.
- **Para Argentina, Chile, Colômbia, Peru:** As transferências são baseadas em seu consentimento explícito fornecido durante a configuração BYOK e atendem aos requisitos de adequação ou proteção equivalente sob as respectivas leis.

Dado que as transferências BYOK ocorrem diretamente do seu navegador ao provedor de IA usando sua própria chave de API, você atua como controlador de dados para essas transferências específicas. Para dados de assinatura, ExtensionPay (EUA) e Stripe Inc. (EUA) processam seu e-mail e informações de pagamento em servidores nos Estados Unidos. Essas transferências são protegidas pelo Quadro de Privacidade de Dados UE-EUA (Stripe é um participante certificado), Cláusulas Contratuais Padrão e salvaguardas equivalentes sob LGPD e LFPDPPP.

## 9. Direitos do Titular dos Dados

Dependendo da sua jurisdição, você tem os seguintes direitos em relação aos seus dados pessoais:

### 9.1 Direitos RGPD (Usuários UE/EEE)

Direito de acesso (Art. 15), direito de retificação (Art. 16), direito de apagamento / direito ao esquecimento (Art. 17), direito à limitação do tratamento (Art. 18), direito à portabilidade de dados (Art. 20), direito de oposição (Art. 21), direitos relacionados à tomada de decisões automatizadas e à elaboração de perfis (Art. 22), e direito de retirar o consentimento a qualquer momento.

### 9.2 Direitos LGPD (Usuários Brasileiros)

Direito à confirmação e acesso (Art. 18, I-II), direito de correção (Art. 18, III), direito à anonimização, bloqueio ou eliminação de dados desnecessários (Art. 18, IV), direito à portabilidade de dados (Art. 18, V), direito à informação sobre terceiros com quem os dados são compartilhados (Art. 18, VII), direito de revogar o consentimento (Art. 18, IX). Prazo de resposta: Confirmação simplificada imediatamente; acesso detalhado dentro de 15 dias.

### 9.3 Direitos ARCO (Usuários Mexicanos)

Sob a LFPDPPP (2025), você tem os direitos de Acesso, Retificação, Cancelamento e Oposição (direitos ARCO). Você também pode se opor ao processamento automatizado que afete significativamente seus direitos ou liberdades. As solicitações são atendidas através da Secretaria de Anticorrupção e Bom Governo.

### 9.4 Direitos sob a Lei Argentina, Chilena, Colombiana e Peruana

**Argentina (Ley 25.326):** Direito de acesso, retificação, supressão e confidencialidade de dados pessoais. **Chile (LPPD):** Direito de acesso, retificação, cancelamento, oposição e portabilidade de dados (em vigor a partir de 1º de dezembro de 2026). **Colômbia (Ley 1581):** Direitos de acesso, atualização, retificação, exclusão e revogação; reclamações à SIC (Superintendencia de Industria y Comercio). **Peru (Ley 29733):** Direitos de acesso, retificação, cancelamento, oposição e portabilidade de dados; reclamações à Autoridad Nacional de Protección de Datos Personales (ANPDP).

### 9.5 Como Exercer Seus Direitos

Como todos os dados são armazenados localmente em seu dispositivo, a maioria dos direitos pode ser exercida diretamente através da interface da Extensão: use a função "Eliminar meus dados" para exclusão, exporte evidências em CSV/JSON para portabilidade, e modifique dados de marca/configuração para retificação. Para solicitações formais, entre em contato com privacy@cazafalsos.com. Responderemos dentro do prazo exigido pela sua lei aplicável (30 dias RGPD, 15 dias LGPD, 20 dias LFPDPPP).

## 10. Segurança dos Dados

Implementamos as seguintes medidas técnicas e organizacionais para proteger seus dados:

- **Criptografia:** As chaves de API são criptografadas usando AES-256-GCM com derivação de chave PBKDF2 (100.000 iterações, SHA-256). Sal único de 16 bytes e IV de 12 bytes por operação de criptografia.
- **Sanitização de Entradas:** Todas as entradas do usuário são sanitizadas contra ataques XSS usando escape de textContent baseado em DOM. Validação de URL para todos os links externos.
- **Segurança de Transporte:** Todas as comunicações de API externas usam exclusivamente HTTPS. Não existem endpoints HTTP no código-fonte.
- **Política de Segurança de Conteúdo:** As páginas da Extensão aplicam script-src 'self' 'wasm-unsafe-eval'; object-src 'self'.
- **Evidência Criptográfica:** O hash SHA-256 dos dados de evidência garante a integridade. OpenTimestamps fornece prova de existência ancorada na blockchain do Bitcoin.
- **Permissões Mínimas:** A Extensão solicita apenas as permissões estritamente necessárias para sua funcionalidade, limitadas aos domínios do Mercado Libre.

## 11. Cookies e Tecnologias de Rastreamento

A extensão de navegador CazaFalsos não utiliza cookies, pixels de rastreamento, web beacons ou qualquer forma de análise externa. Nenhum serviço de análise de terceiros (Google Analytics, Mixpanel, Amplitude ou similares) é integrado. Todas as estatísticas de uso são calculadas e armazenadas localmente em seu dispositivo. Se operarmos um site (por exemplo, cazafalsos.com), uma Política de Cookies separada será aplicada a esse site.

## 12. Privacidade de Menores

O CazaFalsos é uma ferramenta empresarial destinada ao uso por titulares de marcas, profissionais de propriedade intelectual e gestores de comércio eletrônico. O Serviço não é direcionado a indivíduos menores de 18 anos (ou 16 anos para usuários da UE/EEE, ou 13 anos para usuários brasileiros conforme a Lei 58/2019 Art. 16(1)). Não coletamos conscientemente dados pessoais de menores. Se você acredita que um menor nos forneceu dados, entre em contato com privacy@cazafalsos.com, e tomaremos medidas imediatas para excluir tais dados.

## 13. Alterações a Esta Política

Podemos atualizar esta Política de Privacidade periodicamente. Alterações materiais serão comunicadas através da interface da Extensão (por exemplo, via notificação ou aviso de consentimento atualizado). A data de "Última atualização" no topo deste documento indica a revisão mais recente. O uso continuado da Extensão após as alterações constitui aceitação. Para usuários da UE/EEE, alterações materiais que afetem a base legal ou o escopo do processamento exigirão consentimento renovado quando aplicável.

## 14. Informações de Contato e Reclamações

Para qualquer pergunta, preocupação ou solicitação relacionada a esta Política de Privacidade ou seus dados pessoais:

- **E-mail:** privacy@cazafalsos.com
- **Controlador de Dados:** VENTOS ARQUEÁVEIS UNIPESSOAL LDA, Lisboa, Portugal
- **Registrado em Portugal.** Em conformidade com a lei portuguesa, o livro de reclamações eletrônico (Livro de Reclamações Eletrónico) está disponível em www.livroreclamacoes.pt

Você tem o direito de apresentar uma reclamação à autoridade de supervisão relevante:

- **Portugal/UE:** CNPD — Comissão Nacional de Proteção de Dados (www.cnpd.pt)
- **Brasil:** ANPD — Autoridade Nacional de Proteção de Dados (www.gov.br/anpd)
- **México:** Secretaría de Anticorrupción y Buen Gobierno (SABG). Os consumidores mexicanos também podem entrar em contato com a PROFECO (Procuraduría Federal del Consumidor) em www.gob.mx/profeco
- **Argentina:** AAIP — Agencia de Acceso a la Información Pública
- **Chile:** Agencia de Protección de Datos Personales (a partir de dezembro de 2026)
- **Colômbia:** SIC — Superintendencia de Industria y Comercio
- **Peru:** ANPDP — Autoridad Nacional de Protección de Datos Personales

---

© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos os direitos reservados.
Este documento constitui uma política de privacidade legalmente vinculante.`;

const TOS_ES = `## 1. Aceptación de los Términos

Al instalar, acceder o utilizar CazaFalsos — Protección de Marca (la "Extensión" o el "Servicio"), usted acepta quedar vinculado por estos Términos de Servicio ("Términos"). Si no está de acuerdo, debe desinstalar la Extensión y cesar todo uso. Estos Términos constituyen un acuerdo legalmente vinculante entre usted y VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("nosotros", "nuestro" o "la Empresa"), una empresa registrada en Portugal.

Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios materiales se comunicarán a través de la interfaz de la Extensión con al menos 30 días de antelación antes de entrar en vigor. El uso continuado después de los cambios constituye aceptación. Si no está de acuerdo con los Términos modificados, debe discontinuar el uso y desinstalar la Extensión.

## 2. Descripción del Servicio

CazaFalsos es una extensión de navegador Chrome que ayuda a los titulares de marcas a detectar publicaciones de productos potencialmente falsificados, infractores e imitaciones en Mercado Libre / Mercado Livre en México, Brasil, Argentina, Chile, Colombia y Perú. El Servicio proporciona:

- Escaneo automatizado de páginas de productos de Mercado Libre para coincidencias de texto, detección de jerga, detección de homoglifos e identificación de anomalías de precios
- Coincidencia visual mediante hash perceptual (pHash) para identificar imágenes de productos visualmente similares
- Análisis de probabilidad de falsificación asistido por IA mediante integración Bring Your Own Key (BYOK) con OpenAI, Anthropic y Hugging Face
- Recopilación de pruebas con hash criptográfico SHA-256 y sellado de tiempo opcional en blockchain de Bitcoin (OpenTimestamps)
- Generación semi-automatizada de reportes con URLs pre-completadas para las páginas de denuncia de Mercado Libre
- Lista de seguimiento de vendedores y funcionalidad de escaneo programado

CazaFalsos es una herramienta independiente desarrollada por VENTOS ARQUEÁVEIS UNIPESSOAL LDA. No está afiliada, respaldada ni patrocinada por Mercado Libre S.R.L., MercadoLivre ni ninguna de sus subsidiarias. CazaFalsos es una herramienta de monitoreo y generación de plantillas. No constituye asesoramiento legal, no crea una relación abogado-cliente y no reemplaza la consulta con un abogado calificado en propiedad intelectual.

## 3. Elegibilidad y Cuenta

Para utilizar CazaFalsos, debe tener al menos 18 años de edad (o la mayoría de edad legal en su jurisdicción) y tener la capacidad legal para celebrar contratos vinculantes. Al utilizar el Servicio, usted declara y garantiza que cumple con estos requisitos. Si utiliza el Servicio en nombre de una organización, usted declara que tiene la autoridad para vincular a dicha organización a estos Términos.

## 4. BYOK: Uso de APIs de Terceros

CazaFalsos opera con un modelo Bring Your Own Key (BYOK) para las funciones de análisis con IA. Cuando proporciona claves API para OpenAI, Anthropic o Hugging Face:

- Usted es el único responsable de mantener la seguridad y confidencialidad de sus claves API
- Usted es responsable de todos los cargos incurridos por el uso de sus claves API
- Debe cumplir con los términos de servicio y las políticas de uso aceptable de cada proveedor de IA
- No almacenamos sus claves API en nuestros servidores; se cifran localmente en su dispositivo
- No somos responsables de las acciones tomadas por los proveedores de IA con respecto a su cuenta o claves

Recomendamos encarecidamente utilizar claves API con límites de uso apropiados y monitorear sus cuentas de proveedores de IA para detectar actividad inesperada.

## 5. Suscripción y Pago

CazaFalsos ofrece un modelo freemium con los siguientes niveles:

| Nivel | Precio | Características Principales | Límites |
|---|---|---|---|
| Gratis | $0/mes | Detección de jerga, escaneo básico | 1 marca, 50 escaneos/mes |
| Inicial | $49/mes | + pHash, exportación CSV | 5 marcas, 500 escaneos/mes |
| Pro | $99/mes | + BYOK AI, sellado blockchain, CLIP | Ilimitado |
| Experto | $199/mes | + API CLIP, paquete judicial, soporte prioritario | Ilimitado |

Los términos detallados de suscripción, incluyendo facturación, renovación, cancelación y disposiciones de reembolso, se establecen en los Términos de Suscripción y la Política de Reembolso, que se incorporan aquí por referencia.

## 6. Propiedad Intelectual

### 6.1 Nuestra Propiedad Intelectual

CazaFalsos, incluyendo su código fuente, diseño, algoritmos, documentación, marcas comerciales y todos los materiales relacionados, es propiedad intelectual exclusiva de VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos los derechos no otorgados expresamente en este documento quedan reservados. Su uso de la Extensión no transfiere ningún derecho de propiedad.

### 6.2 Su Contenido

Usted conserva todos los derechos de propiedad sobre los nombres de marca, logotipos, palabras clave y otro contenido que introduce en CazaFalsos ("Su Contenido"). Al utilizar el Servicio, nos otorga una licencia limitada, no exclusiva y libre de regalías para procesar Su Contenido únicamente con el fin de proporcionarle el Servicio. También nos otorga una licencia para utilizar datos anonimizados, agregados y desidentificados derivados de Su Contenido con fines de mejora del Servicio, generación de informes estadísticos y marketing, siempre que dichos datos no puedan utilizarse razonablemente para identificarle a usted o a sus marcas.

### 6.3 Restricciones

Usted no podrá: (a) realizar ingeniería inversa, descompilar, desensamblar o intentar de otro modo derivar el código fuente de la Extensión; (b) modificar, adaptar, traducir o crear obras derivadas basadas en la Extensión; (c) alquilar, arrendar, prestar, sublicenciar, distribuir o transferir la Extensión; (d) utilizar la Extensión para desarrollar un producto o servicio competidor; (e) eliminar o alterar cualquier aviso de propiedad, etiqueta o marca; (f) utilizar la Extensión para cualquier propósito que viole la ley aplicable.

## 7. Usos Prohibidos

Usted acepta no utilizar CazaFalsos para:

- Presentar solicitudes de eliminación o denuncias de propiedad intelectual falsas, fraudulentas o abusivas
- Acosar, acechar o intimidar a vendedores u otros participantes del mercado
- Recopilar datos personales sobre vendedores para propósitos no relacionados con la protección de marca
- Eludir los términos de servicio o las medidas de seguridad de Mercado Libre
- Utilizar las funciones de análisis de IA para generar contenido dañino, ilegal o engañoso
- Exceder los límites de uso razonables o participar en el abuso automatizado de los sistemas del mercado
- Violar las políticas de uso aceptable de los proveedores de IA (OpenAI, Anthropic, Hugging Face)

La violación de estas restricciones puede resultar en la suspensión o terminación inmediata de su acceso. Consulte la Política de Uso Aceptable para obtener detalles completos.

## 8. Descargos de Responsabilidad y Limitación de Responsabilidad

### 8.1 No Constituye Asesoramiento Legal

CazaFalsos es una herramienta independiente desarrollada por VENTOS ARQUEÁVEIS UNIPESSOAL LDA. No está afiliada, respaldada ni patrocinada por Mercado Libre S.R.L., MercadoLivre ni ninguna de sus subsidiarias. CazaFalsos es una herramienta de monitoreo y generación de plantillas. No constituye asesoramiento legal y no crea una relación abogado-cliente. Las plantillas de denuncia, las funciones de recopilación de pruebas y los resultados de análisis se proporcionan únicamente como referencia. Para asuntos legales, consulte a un abogado calificado en propiedad intelectual con licencia en la jurisdicción correspondiente.

### 8.2 Sin Garantía de Resultados

No garantizamos que: (a) las solicitudes de eliminación generadas por CazaFalsos serán aceptadas o ejecutadas por Mercado Libre o cualquier otra plataforma; (b) el análisis de IA identificará correctamente todas las falsificaciones o evitará todos los falsos positivos. De conformidad con la Ley de IA de la UE (Reglamento (UE) 2024/1689), los resultados de análisis generados por IA están claramente marcados como tales y no deben utilizarse como base única para presentar denuncias de propiedad intelectual; (c) las pruebas recopiladas a través de la Extensión serán admisibles en cualquier tribunal o procedimiento; (d) el Servicio será ininterrumpido, libre de errores o estará disponible en todo momento.

### 8.3 Descargo de Responsabilidad sobre Pruebas

Las capturas de pantalla, los hashes SHA-256 y las pruebas de OpenTimestamps almacenadas por CazaFalsos son únicamente para su referencia. Su admisibilidad como prueba legal depende de la ley aplicable, las reglas del tribunal y la discreción judicial en cada jurisdicción. No hacemos ninguna declaración con respecto a su validez legal.

### 8.4 Limitación de Responsabilidad

EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY APLICABLE, INCLUYENDO PERO SIN LIMITARSE A LAS LEYES DE PORTUGAL, BRASIL (CÓDIGO DE DEFESA DO CONSUMIDOR), MÉXICO, ARGENTINA, CHILE, COLOMBIA Y PERÚ:

NUESTRA RESPONSABILIDAD TOTAL POR CUALQUIER RECLAMACIÓN DERIVADA DE O RELACIONADA CON ESTOS TÉRMINOS O EL SERVICIO NO EXCEDERÁ EL MONTO QUE USTED NOS PAGÓ EN EL MES (1) INMEDIATAMENTE ANTERIOR A LA RECLAMACIÓN. PARA LOS USUARIOS DEL NIVEL GRATUITO, NUESTRA RESPONSABILIDAD TOTAL NO EXCEDERÁ CINCUENTA DÓLARES ESTADOUNIDENSES (US$50).

EN NINGÚN CASO SEREMOS RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS, INCLUYENDO PERO SIN LIMITARSE A LA PÉRDIDA DE BENEFICIOS, DATOS, OPORTUNIDADES COMERCIALES, FONDO DE COMERCIO O INGRESOS, YA SEA QUE SURJAN DE CONTRATO, AGRAVIO, RESPONSABILIDAD ESTRICTA U OTRO.

Estas limitaciones no se aplican en la medida en que lo prohíban las leyes obligatorias de protección al consumidor en su jurisdicción.

## 9. Indemnización

Usted acepta indemnizar, defender y mantener indemne a VENTOS ARQUEÁVEIS UNIPESSOAL LDA, sus funcionarios, directores, empleados y agentes de cualquier reclamación, responsabilidad, daño, pérdida y gasto (incluyendo honorarios legales razonables) derivados de: (a) su uso del Servicio; (b) su violación de estos Términos; (c) su violación de cualquier derecho de terceros, incluyendo derechos de propiedad intelectual; (d) cualquier solicitud de eliminación falsa o abusiva presentada utilizando pruebas generadas por el Servicio; (e) su uso de claves API BYOK e interacciones con proveedores de IA.

## 10. Resolución de Disputas

### 10.1 Requisito Pre-Litigioso

Antes de iniciar cualquier procedimiento legal, debe enviarnos un aviso escrito describiendo la disputa y su resolución propuesta a legal@cazafalsos.com. Tendremos treinta (30) días para responder e intentar resolver la disputa de manera amistosa. Este requisito pre-litigioso es una condición previa obligatoria para cualquier acción legal.

### 10.2 Ley Aplicable y Jurisdicción

Estos Términos se regirán e interpretarán de acuerdo con las leyes de Portugal, sin tener en cuenta los principios de conflicto de leyes. Cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales de Lisboa, Portugal.

Para los consumidores residentes en la Unión Europea, las disposiciones obligatorias de protección al consumidor de su país de residencia se aplicarán adicionalmente. Para los consumidores en Brasil, las disposiciones del Código de Defesa do Consumidor (CDC) se aplicarán en la medida en que proporcionen mayor protección. Para los consumidores en México, las disposiciones de la Ley Federal de Protección al Consumidor se aplicarán cuando sean obligatorias. Los usuarios en México también pueden presentar quejas ante PROFECO (Procuraduría Federal del Consumidor). Para los usuarios en Argentina, nada en estos Términos limita o renuncia a los derechos otorgados por la Ley 24.240 de Defensa del Consumidor y sus modificaciones. Para los usuarios en Chile, Colombia y Perú, nada en estos Términos limita sus derechos bajo las leyes obligatorias de protección al consumidor de su jurisdicción.

## 11. Plazo y Terminación

Estos Términos son efectivos hasta su terminación. Usted puede terminar en cualquier momento desinstalando la Extensión y cesando todo uso. Podemos suspender o terminar su acceso inmediatamente si: (a) usted incumple estos Términos; (b) estamos obligados a hacerlo por ley; (c) discontinuamos el Servicio. Tras la terminación, su licencia para utilizar la Extensión queda inmediatamente revocada. Los datos almacenados localmente permanecen en su dispositivo hasta que los elimine o borre los datos del navegador.

## 12. Disposiciones Generales

**Divisibilidad:** Si alguna disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes permanecen en pleno vigor y efecto. **Acuerdo Completo:** Estos Términos, junto con la Política de Privacidad, el EULA, los Términos de Suscripción, la Política de Reembolso, la Política de Uso Aceptable y cualquier adenda específica del producto, constituyen el acuerdo completo entre usted y la Empresa. **Renuncia:** Nuestro incumplimiento en hacer valer cualquier derecho o disposición no constituye una renuncia. **Libro de Reclamaciones:** De conformidad con el Decreto-Ley portugués 156/2005, el libro de reclamaciones electrónico (Livro de Reclamações Eletrónico) está disponible en www.livroreclamacoes.pt. **Cesión:** Podemos ceder estos Términos sin su consentimiento; usted no puede cederlos sin nuestro consentimiento previo por escrito. **Fuerza Mayor:** Ninguna de las partes es responsable por retrasos o incumplimientos causados por eventos fuera de su control razonable. **Idioma:** En caso de conflicto entre versiones traducidas, prevalece la versión en inglés.

---

© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos los derechos reservados.`;

const TOS_PT = `## 1. Aceitação dos Termos

Ao instalar, acessar ou utilizar o CazaFalsos — Protección de Marca (a "Extensão" ou o "Serviço"), você concorda em ficar vinculado a estes Termos de Serviço ("Termos"). Se não concordar, você deve desinstalar a Extensão e cessar todo uso. Estes Termos constituem um acordo legalmente vinculante entre você e VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("nós", "nosso" ou "a Empresa"), uma empresa registrada em Portugal.

Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações materiais serão comunicadas através da interface da Extensão com pelo menos 30 dias de antecedência antes de entrarem em vigor. O uso continuado após as alterações constitui aceitação. Se não concordar com os Termos modificados, você deve descontinuar o uso e desinstalar a Extensão.

## 2. Descrição do Serviço

O CazaFalsos é uma extensão de navegador Chrome que ajuda titulares de marcas a detectar anúncios de produtos potencialmente falsificados, infratores e imitações no Mercado Libre / Mercado Livre no México, Brasil, Argentina, Chile, Colômbia e Peru. O Serviço fornece:

- Varredura automatizada de páginas de produtos do Mercado Libre para correspondências de texto, detecção de gírias, detecção de homoglifos e identificação de anomalias de preços
- Correspondência visual por hash perceptual (pHash) para identificar imagens de produtos visualmente similares
- Análise de probabilidade de falsificação assistida por IA via integração Bring Your Own Key (BYOK) com OpenAI, Anthropic e Hugging Face
- Coleta de evidências com hash criptográfico SHA-256 e carimbo de data/hora opcional em blockchain de Bitcoin (OpenTimestamps)
- Geração semi-automatizada de relatórios com URLs pré-preenchidas para as páginas de denúncia do Mercado Libre
- Lista de acompanhamento de vendedores e funcionalidade de varredura agendada

O CazaFalsos é uma ferramenta independente desenvolvida pela VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Não é afiliada, endossada ou patrocinada pela Mercado Libre S.R.L., MercadoLivre ou qualquer de suas subsidiárias. O CazaFalsos é uma ferramenta de monitoramento e geração de modelos. Não constitui aconselhamento jurídico, não cria uma relação advogado-cliente e não substitui a consulta com um advogado qualificado em propriedade intelectual.

## 3. Elegibilidade e Conta

Para utilizar o CazaFalsos, você deve ter pelo menos 18 anos de idade (ou a maioridade legal em sua jurisdição) e ter capacidade legal para celebrar contratos vinculantes. Ao utilizar o Serviço, você declara e garante que atende a esses requisitos. Se estiver usando o Serviço em nome de uma organização, você declara que tem autoridade para vincular essa organização a estes Termos.

## 4. BYOK: Uso de APIs de Terceiros

O CazaFalsos opera com um modelo Bring Your Own Key (BYOK) para os recursos de análise com IA. Quando você fornece chaves de API para OpenAI, Anthropic ou Hugging Face:

- Você é o único responsável por manter a segurança e confidencialidade de suas chaves de API
- Você é responsável por todos os encargos incorridos pelo uso de suas chaves de API
- Você deve cumprir os termos de serviço e as políticas de uso aceitável de cada provedor de IA
- Não armazenamos suas chaves de API em nossos servidores; elas são criptografadas localmente em seu dispositivo
- Não somos responsáveis por quaisquer ações tomadas pelos provedores de IA em relação à sua conta ou chaves

Recomendamos fortemente o uso de chaves de API com limites de uso apropriados e o monitoramento de suas contas de provedores de IA para detectar atividade inesperada.

## 5. Assinatura e Pagamento

O CazaFalsos oferece um modelo freemium com os seguintes níveis:

| Nível | Preço | Características Principais | Limites |
|---|---|---|---|
| Grátis | $0/mês | Detecção de gírias, varredura básica | 1 marca, 50 varreduras/mês |
| Inicial | $49/mês | + pHash, exportação CSV | 5 marcas, 500 varreduras/mês |
| Pro | $99/mês | + BYOK AI, carimbo blockchain, CLIP | Ilimitado |
| Experto | $199/mês | + API CLIP, pacote judicial, suporte prioritário | Ilimitado |

Os termos detalhados de assinatura, incluindo faturamento, renovação, cancelamento e disposições de reembolso, são estabelecidos nos Termos de Assinatura e na Política de Reembolso, que são incorporados aqui por referência.

## 6. Propriedade Intelectual

### 6.1 Nossa Propriedade Intelectual

O CazaFalsos, incluindo seu código-fonte, design, algoritmos, documentação, marcas registradas e todos os materiais relacionados, é propriedade intelectual exclusiva da VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos os direitos não expressamente concedidos neste documento ficam reservados. Seu uso da Extensão não transfere nenhum direito de propriedade.

### 6.2 Seu Conteúdo

Você retém todos os direitos de propriedade sobre os nomes de marca, logotipos, palavras-chave e outro conteúdo que insere no CazaFalsos ("Seu Conteúdo"). Ao utilizar o Serviço, você nos concede uma licença limitada, não exclusiva e livre de royalties para processar Seu Conteúdo exclusivamente com o fim de fornecer o Serviço a você. Você também nos concede uma licença para utilizar dados anonimizados, agregados e desidentificados derivados de Seu Conteúdo para fins de melhoria do Serviço, geração de relatórios estatísticos e marketing, desde que tais dados não possam ser razoavelmente utilizados para identificá-lo ou às suas marcas.

### 6.3 Restrições

Você não poderá: (a) realizar engenharia reversa, descompilar, desmontar ou tentar de outra forma derivar o código-fonte da Extensão; (b) modificar, adaptar, traduzir ou criar obras derivadas baseadas na Extensão; (c) alugar, arrendar, emprestar, sublicenciar, distribuir ou transferir a Extensão; (d) utilizar a Extensão para desenvolver um produto ou serviço concorrente; (e) remover ou alterar quaisquer avisos de propriedade, rótulos ou marcas; (f) utilizar a Extensão para qualquer finalidade que viole a lei aplicável.

## 7. Usos Proibidos

Você concorda em não utilizar o CazaFalsos para:

- Apresentar solicitações de remoção ou denúncias de propriedade intelectual falsas, fraudulentas ou abusivas
- Assediar, perseguir ou intimidar vendedores ou outros participantes do marketplace
- Coletar dados pessoais sobre vendedores para fins não relacionados à proteção de marca
- Contornar os termos de serviço ou as medidas de segurança do Mercado Libre
- Utilizar os recursos de análise de IA para gerar conteúdo prejudicial, ilegal ou enganoso
- Exceder os limites de uso razoáveis ou participar do abuso automatizado dos sistemas do marketplace
- Violar as políticas de uso aceitável dos provedores de IA (OpenAI, Anthropic, Hugging Face)

A violação dessas restrições pode resultar na suspensão ou encerramento imediato do seu acesso. Consulte a Política de Uso Aceitável para detalhes completos.

## 8. Isenções de Responsabilidade e Limitação de Responsabilidade

### 8.1 Não Constitui Aconselhamento Jurídico

O CazaFalsos é uma ferramenta independente desenvolvida pela VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Não é afiliada, endossada ou patrocinada pela Mercado Libre S.R.L., MercadoLivre ou qualquer de suas subsidiárias. O CazaFalsos é uma ferramenta de monitoramento e geração de modelos. Não constitui aconselhamento jurídico e não cria uma relação advogado-cliente. Os modelos de denúncia, os recursos de coleta de evidências e os resultados de análise são fornecidos apenas como referência. Para questões jurídicas, consulte um advogado qualificado em propriedade intelectual licenciado na jurisdição relevante.

### 8.2 Sem Garantia de Resultados

Não garantimos que: (a) as solicitações de remoção geradas pelo CazaFalsos serão aceitas ou executadas pelo Mercado Libre ou qualquer outra plataforma; (b) a análise de IA identificará corretamente todas as falsificações ou evitará todos os falsos positivos. De acordo com a Lei de IA da UE (Regulamento (UE) 2024/1689), os resultados de análise gerados por IA são claramente marcados como tais e não devem ser utilizados como base única para apresentar denúncias de propriedade intelectual; (c) as evidências coletadas através da Extensão serão admissíveis em qualquer tribunal ou procedimento; (d) o Serviço será ininterrupto, livre de erros ou estará disponível em todos os momentos.

### 8.3 Isenção de Responsabilidade sobre Evidências

As capturas de tela, hashes SHA-256 e provas de OpenTimestamps armazenadas pelo CazaFalsos são apenas para sua referência. Sua admissibilidade como prova legal depende da lei aplicável, das regras do tribunal e da discrição judicial em cada jurisdição. Não fazemos nenhuma declaração quanto à sua validade legal.

### 8.4 Limitação de Responsabilidade

NA MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, INCLUINDO, MAS NÃO SE LIMITANDO ÀS LEIS DE PORTUGAL, BRASIL (CÓDIGO DE DEFESA DO CONSUMIDOR), MÉXICO, ARGENTINA, CHILE, COLÔMBIA E PERU:

NOSSA RESPONSABILIDADE TOTAL POR QUAISQUER RECLAMAÇÕES DECORRENTES DE OU RELACIONADAS A ESTES TERMOS OU AO SERVIÇO NÃO EXCEDERÁ O VALOR QUE VOCÊ NOS PAGOU NO MÊS (1) IMEDIATAMENTE ANTERIOR À RECLAMAÇÃO. PARA USUÁRIOS DO NÍVEL GRATUITO, NOSSA RESPONSABILIDADE TOTAL NÃO EXCEDERÁ CINQUENTA DÓLARES AMERICANOS (US$50).

EM NENHUMA HIPÓTESE SEREMOS RESPONSÁVEIS POR DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS, INCLUINDO, MAS NÃO SE LIMITANDO À PERDA DE LUCROS, DADOS, OPORTUNIDADES COMERCIAIS, FUNDO DE COMÉRCIO OU RECEITAS, SEJA DECORRENTE DE CONTRATO, ATO ILÍCITO, RESPONSABILIDADE OBJETIVA OU OUTRO.

Essas limitações não se aplicam na medida em que sejam proibidas por leis obrigatórias de proteção ao consumidor em sua jurisdição.

## 9. Indenização

Você concorda em indenizar, defender e manter indene a VENTOS ARQUEÁVEIS UNIPESSOAL LDA, seus funcionários, diretores, empregados e agentes de quaisquer reclamações, responsabilidades, danos, perdas e despesas (incluindo honorários advocatícios razoáveis) decorrentes de: (a) seu uso do Serviço; (b) sua violação destes Termos; (c) sua violação de quaisquer direitos de terceiros, incluindo direitos de propriedade intelectual; (d) quaisquer solicitações de remoção falsas ou abusivas apresentadas usando evidências geradas pelo Serviço; (e) seu uso de chaves de API BYOK e interações com provedores de IA.

## 10. Resolução de Disputas

### 10.1 Requisito Pré-Contencioso

Antes de iniciar qualquer procedimento legal, você deve nos enviar um aviso por escrito descrevendo a disputa e sua resolução proposta para legal@cazafalsos.com. Teremos trinta (30) dias para responder e tentar resolver a disputa amigavelmente. Este requisito pré-contencioso é uma condição prévia obrigatória para qualquer ação legal.

### 10.2 Lei Aplicável e Jurisdição

Estes Termos serão regidos e interpretados de acordo com as leis de Portugal, sem considerar os princípios de conflito de leis. Quaisquer disputas estarão sujeitas à jurisdição exclusiva dos tribunais de Lisboa, Portugal.

Para os consumidores residentes na União Europeia, as disposições obrigatórias de proteção ao consumidor de seu país de residência serão aplicadas adicionalmente. Para os consumidores no Brasil, as disposições do Código de Defesa do Consumidor (CDC) serão aplicadas na medida em que proporcionem maior proteção. Para os consumidores no México, as disposições da Ley Federal de Protección al Consumidor serão aplicadas quando obrigatórias. Os usuários no México também podem apresentar queixas à PROFECO (Procuraduría Federal del Consumidor). Para os usuários na Argentina, nada nestes Termos limita ou renuncia a quaisquer direitos concedidos pela Ley 24.240 de Defensa del Consumidor e suas alterações. Para os usuários no Chile, Colômbia e Peru, nada nestes Termos limita seus direitos sob as leis obrigatórias de proteção ao consumidor de sua jurisdição.

## 11. Prazo e Rescisão

Estes Termos são efetivos até sua rescisão. Você pode rescindir a qualquer momento desinstalando a Extensão e cessando todo uso. Podemos suspender ou encerrar seu acesso imediatamente se: (a) você violar estes Termos; (b) formos obrigados a fazê-lo por lei; (c) descontinuarmos o Serviço. Após a rescisão, sua licença para utilizar a Extensão é imediatamente revogada. Os dados armazenados localmente permanecem em seu dispositivo até que você os exclua ou limpe os dados do navegador.

## 12. Disposições Gerais

**Divisibilidade:** Se qualquer disposição destes Termos for considerada inválida ou inexequível, as disposições restantes permanecem em pleno vigor e efeito. **Acordo Integral:** Estes Termos, juntamente com a Política de Privacidade, o EULA, os Termos de Assinatura, a Política de Reembolso, a Política de Uso Aceitável e quaisquer adendos específicos do produto, constituem o acordo integral entre você e a Empresa. **Renúncia:** Nossa falha em exercer qualquer direito ou disposição não constitui uma renúncia. **Livro de Reclamações:** Em conformidade com o Decreto-Lei português 156/2005, o livro de reclamações eletrônico (Livro de Reclamações Eletrónico) está disponível em www.livroreclamacoes.pt. **Cessão:** Podemos ceder estes Termos sem seu consentimento; você não pode cedê-los sem nosso consentimento prévio por escrito. **Força Maior:** Nenhuma das partes é responsável por atrasos ou falhas causados por eventos além do controle razoável. **Idioma:** Em caso de conflito entre versões traduzidas, a versão em inglês prevalece.

---

© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos os direitos reservados.`;

const COOKIES_ES = `## 1. Acerca de Esta Política

Esta Política de Cookies explica el uso de cookies y tecnologías similares en conexión con CazaFalsos — Protección de Marca y cualquier sitio web asociado.

## 2. Cookies en la Extensión del Navegador

La extensión de navegador CazaFalsos NO utiliza cookies, píxeles de seguimiento, balizas web ni ninguna forma de tecnología de seguimiento externo. La Extensión almacena datos exclusivamente utilizando chrome.storage.local e IndexedDB, que son APIs de almacenamiento del navegador que no son cookies y no le rastrean a través de sitios web.

Ningún servicio de análisis de terceros (Google Analytics, Mixpanel, Amplitude o similares) está integrado en la Extensión. No hay redes publicitarias ni seguimiento de redes sociales presente.

## 3. Cookies en Nuestro Sitio Web

Si operamos un sitio web (por ejemplo, cazafalsos.com), se pueden utilizar las siguientes cookies:

### 3.1 Cookies Estrictamente Necesarias

Estas cookies son esenciales para que el sitio web funcione y no se pueden desactivar. Incluyen cookies de sesión para envíos de formularios y tokens de seguridad.

### 3.2 Cookies de Análisis (si se implementan)

Si implementamos análisis en nuestro sitio web, utilizaremos herramientas de análisis centradas en la privacidad y las divulgaremos claramente aquí. A la fecha de entrada en vigor, no se utilizan cookies de análisis.

### 3.3 Cookies de Terceros

Cuando accede al flujo de pago/suscripción, Stripe puede establecer cookies para la prevención del fraude y el procesamiento de pagos. Estas se rigen por la Política de Cookies de Stripe.

## 4. Gestión de Cookies

Puede gestionar las cookies a través de la configuración de su navegador. La mayoría de los navegadores le permiten rechazar cookies, eliminar cookies existentes y establecer preferencias para sitios web específicos. Tenga en cuenta que desactivar las cookies estrictamente necesarias puede afectar la funcionalidad del sitio web. La funcionalidad de la Extensión no se ve afectada por la configuración de cookies.

## 5. Actualizaciones

Podemos actualizar esta Política de Cookies periódicamente. Los cambios se publicarán en nuestro sitio web y/o se comunicarán a través de la Extensión.

---

© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos los derechos reservados. Livro de Reclamações Eletrónico: www.livroreclamacoes.pt`;

const COOKIES_PT = `## 1. Sobre Esta Política

Esta Política de Cookies explica o uso de cookies e tecnologias similares em conexão com o CazaFalsos — Protección de Marca e quaisquer sites associados.

## 2. Cookies na Extensão do Navegador

A extensão de navegador CazaFalsos NÃO utiliza cookies, pixels de rastreamento, web beacons ou qualquer forma de tecnologia de rastreamento externo. A Extensão armazena dados exclusivamente usando chrome.storage.local e IndexedDB, que são APIs de armazenamento do navegador que não são cookies e não rastreiam você através de sites.

Nenhum serviço de análise de terceiros (Google Analytics, Mixpanel, Amplitude ou similares) está integrado na Extensão. Nenhuma rede de publicidade ou rastreamento de redes sociais está presente.

## 3. Cookies em Nosso Site

Se operarmos um site (por exemplo, cazafalsos.com), os seguintes cookies podem ser utilizados:

### 3.1 Cookies Estritamente Necessários

Esses cookies são essenciais para o funcionamento do site e não podem ser desativados. Incluem cookies de sessão para envio de formulários e tokens de segurança.

### 3.2 Cookies de Análise (se implementados)

Se implementarmos análise em nosso site, utilizaremos ferramentas de análise focadas em privacidade e as divulgaremos claramente aqui. Na data de vigência, nenhum cookie de análise é utilizado.

### 3.3 Cookies de Terceiros

Quando você acessa o fluxo de pagamento/assinatura, o Stripe pode definir cookies para prevenção de fraude e processamento de pagamentos. Estes são regidos pela Política de Cookies do Stripe.

## 4. Gerenciamento de Cookies

Você pode gerenciar os cookies através das configurações do seu navegador. A maioria dos navegadores permite que você recuse cookies, exclua cookies existentes e defina preferências para sites específicos. Observe que desativar cookies estritamente necessários pode afetar a funcionalidade do site. A funcionalidade da Extensão não é afetada pelas configurações de cookies.

## 5. Atualizações

Podemos atualizar esta Política de Cookies periodicamente. As alterações serão publicadas em nosso site e/ou comunicadas através da Extensão.

---

© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. Todos os direitos reservados. Livro de Reclamações Eletrónico: www.livroreclamacoes.pt`;

const LEGAL_DOCS: Record<string, LegalDoc> = {
  privacidad: {
    title: { es: "Política de Privacidad", pt: "Política de Privacidade" },
    updated: { es: "Última actualización: 10 de marzo de 2026", pt: "Última atualização: 10 de março de 2026" },
    body: { es: PRIVACY_ES, pt: PRIVACY_PT },
    seoTitle: { es: "Política de Privacidad — CazaFalsos", pt: "Política de Privacidade — CazaFalsos" },
    seoDesc: {
      es: "Política de privacidad de CazaFalsos. Cumplimos con RGPD, LGPD, LFPDPPP y leyes de protección de datos de Argentina, Chile, Colombia y Perú.",
      pt: "Política de privacidade do CazaFalsos. Cumprimos RGPD, LGPD, LFPDPPP e leis de proteção de dados da Argentina, Chile, Colômbia e Peru.",
    },
  },
  privacidade: {
    title: { es: "Política de Privacidad", pt: "Política de Privacidade" },
    updated: { es: "Última actualización: 10 de marzo de 2026", pt: "Última atualização: 10 de março de 2026" },
    body: { es: PRIVACY_ES, pt: PRIVACY_PT },
    seoTitle: { es: "Política de Privacidad — CazaFalsos", pt: "Política de Privacidade — CazaFalsos" },
    seoDesc: { es: "Política de privacidad de CazaFalsos.", pt: "Política de privacidade do CazaFalsos." },
  },
  terminos: {
    title: { es: "Términos de Servicio", pt: "Termos de Serviço" },
    updated: { es: "Última actualización: 10 de marzo de 2026", pt: "Última atualização: 10 de março de 2026" },
    body: { es: TOS_ES, pt: TOS_PT },
    seoTitle: { es: "Términos de Servicio — CazaFalsos", pt: "Termos de Serviço — CazaFalsos" },
    seoDesc: {
      es: "Términos de servicio de CazaFalsos. Condiciones de uso, suscripción, propiedad intelectual y resolución de disputas.",
      pt: "Termos de serviço do CazaFalsos. Condições de uso, assinatura, propriedade intelectual e resolução de disputas.",
    },
  },
  termos: {
    title: { es: "Términos de Servicio", pt: "Termos de Serviço" },
    updated: { es: "Última actualización: 10 de marzo de 2026", pt: "Última atualização: 10 de março de 2026" },
    body: { es: TOS_ES, pt: TOS_PT },
    seoTitle: { es: "Términos de Servicio — CazaFalsos", pt: "Termos de Serviço — CazaFalsos" },
    seoDesc: { es: "Términos de servicio de CazaFalsos.", pt: "Termos de serviço do CazaFalsos." },
  },
  cookies: {
    title: { es: "Política de Cookies", pt: "Política de Cookies" },
    updated: { es: "Última actualización: 10 de marzo de 2026", pt: "Última atualização: 10 de março de 2026" },
    body: { es: COOKIES_ES, pt: COOKIES_PT },
    seoTitle: { es: "Política de Cookies — CazaFalsos", pt: "Política de Cookies — CazaFalsos" },
    seoDesc: {
      es: "Política de cookies de CazaFalsos. La extensión no usa cookies. Información sobre cookies del sitio web.",
      pt: "Política de cookies do CazaFalsos. A extensão não usa cookies. Informações sobre cookies do site.",
    },
  },
  reembolsos: {
    title: { es: "Política de Reembolsos", pt: "Política de Reembolsos" },
    updated: { es: "Última actualización: 10 de marzo de 2026", pt: "Última atualização: 10 de março de 2026" },
    body: { es: REFUND_ES, pt: REFUND_PT },
    seoTitle: { es: "Política de Reembolsos — CazaFalsos", pt: "Política de Reembolsos — CazaFalsos" },
    seoDesc: {
      es: "Política de reembolsos de CazaFalsos. Período de desistimiento de 14 días, condiciones y proceso de reembolso.",
      pt: "Política de reembolsos do CazaFalsos. Período de desistência de 14 dias, condições e processo de reembolso.",
    },
  },
};

/* Simple markdown-ish renderer for the legal body text */
function LegalBody({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: JSX.Element[] = [];

  let inTable = false;
  let tableRows: string[][] = [];
  let tableKey = 0;

  const flushTable = () => {
    if (tableRows.length === 0) return;
    const header = tableRows[0];
    const body = tableRows.slice(2); // skip separator row
    elements.push(
      <div key={`table-${tableKey++}`} className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {header.map((cell, i) => (
                <th key={i} className="border border-border bg-muted/50 px-3 py-2 text-left font-semibold text-foreground">
                  {cell.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td key={ci} className="border border-border px-3 py-2 text-muted-foreground">
                    {cell.trim()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table row
    if (line.startsWith("|")) {
      inTable = true;
      const cells = line.split("|").slice(1, -1);
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={i} className="my-8 border-border" />);
      continue;
    }

    // Headings
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-semibold text-foreground mt-6 mb-3">
          {line.slice(4)}
        </h3>
      );
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-foreground mt-8 mb-4">
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    // List items
    if (line.startsWith("- ")) {
      const content = line.slice(2);
      elements.push(
        <li key={i} className="ml-4 mb-1 text-muted-foreground list-disc">
          <span dangerouslySetInnerHTML={{ __html: boldify(content) }} />
        </li>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      elements.push(<div key={i} className="h-3" />);
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-muted-foreground leading-relaxed mb-2">
        <span dangerouslySetInnerHTML={{ __html: boldify(line) }} />
      </p>
    );
  }

  if (inTable) flushTable();

  return <div>{elements}</div>;
}

function boldify(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
}

const LegalPage = () => {
  const { slug } = useParams();
  const { lang } = useLang();
  const doc = LEGAL_DOCS[slug || ""];

  if (!doc) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="section-container section-padding text-center">
          <h1 className="text-4xl font-bold text-foreground">404</h1>
          <p className="mt-4 text-muted-foreground">
            {lang === "es" ? "Página no encontrada" : "Página não encontrada"}
          </p>
          <Link to="/" className="inline-block mt-6 text-primary hover:underline">
            {lang === "es" ? "Volver al inicio" : "Voltar ao início"}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={doc.seoTitle[lang]} description={doc.seoDesc[lang]} />
      <Header />
      <main className="section-container section-padding">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "es" ? "Volver" : "Voltar"}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {doc.title[lang]}
          </h1>
          <p className="text-sm text-muted-foreground mb-10 border-b border-border pb-6">
            {doc.updated[lang]}
          </p>

          <article className="prose-legal">
            <LegalBody text={doc.body[lang]} />
          </article>

          <div className="mt-12 pt-6 border-t border-border">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === "es" ? "Volver al inicio" : "Voltar ao início"}
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;

import styles from "./privacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Política de Privacidade</h1>
      <p className={styles.text}>
        Bem-vindo à nossa política de privacidade. Aqui, explicamos como lidamos
        com suas informações pessoais ao usar nosso site automotivo, que inclui
        artigos, vídeos do nosso canal no YouTube e uma loja online.
      </p>

      <section>
        <h2 className={styles.sectionTitle}>1. Informações que Coletamos</h2>
        <p className={styles.text}>
          Durante sua interação com nosso site, podemos coletar as seguintes
          informações:
        </p>
        <ul className={styles.list}>
          <li>Dados fornecidos voluntariamente, como nome e e-mail;</li>
          <li>Informações de navegação, como endereço IP e cookies;</li>
          <li>Detalhes de compras realizadas em nossa loja.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>
          2. Como Utilizamos suas Informações
        </h2>
        <p className={styles.text}>
          Utilizamos suas informações pessoais para:
        </p>
        <ul className={styles.list}>
          <li>Personalizar sua experiência no site;</li>
          <li>Enviar atualizações sobre novos artigos, vídeos ou produtos;</li>
          <li>Processar pedidos realizados na loja;</li>
          <li>Melhorar nossos serviços e o desempenho do site.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>
          3. Compartilhamento de Informações
        </h2>
        <p className={styles.text}>
          Garantimos que suas informações pessoais não serão vendidas ou
          compartilhadas sem sua autorização. Podemos compartilhá-las com:
        </p>
        <ul className={styles.list}>
          <li>
            Fornecedores de serviços essenciais (como sistemas de pagamento);
          </li>
          <li>
            Plataformas de marketing, como o YouTube, para integração de vídeos;
          </li>
          <li>Autoridades legais, quando exigido por lei.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>4. Seus Direitos</h2>
        <p className={styles.text}>Você tem o direito de:</p>
        <ul className={styles.list}>
          <li>Acessar e atualizar suas informações pessoais;</li>
          <li>Solicitar a exclusão de seus dados;</li>
          <li>Cancelar o recebimento de comunicações promocionais.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>5. Cookies</h2>
        <p className={styles.text}>
          Nosso site utiliza cookies para melhorar sua experiência de navegação.
          Você pode gerenciar ou desativar os cookies diretamente nas
          configurações do seu navegador.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>6. Alterações nesta Política</h2>
        <p className={styles.text}>
          Reservamos o direito de atualizar esta política de privacidade
          periodicamente. Recomendamos que você revise esta página regularmente.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>7. Contato</h2>
        <p className={styles.text}>
          Se tiver dúvidas ou preocupações sobre nossa política de privacidade,
          entre em contato conosco pelo e-mail{" "}
          <a href="mailto:contato@seusite.com" className={styles.link}>
            contato@autobrothers.com.br
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

<template>
  <footer>
    <div class="footer-container">
      <p>
        <a href="javascript:;">{{ $t('footer.TermsOfUse') }}</a>&nbsp;|&nbsp;
        <a href="javascript:;">{{ $t('footer.PrivacyPolicy') }}</a>
      </p>
      <p class="copyright-en">COPYRIGHT © 2020 XXX.COM ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    width: 100%;
    height: 110px;
    background-color: #1F183D;
    text-align: center;
    overflow: hidden;

    .footer-container {
      max-width: 990px;
      margin: 0 auto;
      padding: 30px 0;
    }

    a {
      text-decoration: none;
      outline: 0;
      color: #aaacc8;
      font-size: 12px;

      &:visited {
        outline: 0;
      }
    }
    p {
      color: #aaacc8;
      line-height: 24px;
      font-size: 10px;
    }
  }
</style>

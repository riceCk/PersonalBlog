/**
* 时间：2019.05.06
* 作者：陈凯
* 描述：登录页面
*/
<template>
  <div class="login">
    <p class="tip">Pretend to have a title</p>
    <div class="cont" :class="{'s--signup': signIn}">
      <div class="form sign-in">
        <h2>Welcome back</h2>
        <label>
          <span>Email</span>
          <input type="email">
        </label>
        <label>
          <span>Password</span>
          <input type="password">
        </label>
        <p class="forgot-pass">Forgot password?</p>
        <button type="button" class="submit">Sign In</button>
        <button type="button" class="fb-btn">
          Connect with <span>facebook</span>
        </button>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img_text m--up">
            <h2>New here?</h2>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img_text m--in">
            <h2>One of us?</h2>
            <p>If you already has an account, just sign in. We've missed you!</p>
          </div>
          <div class="img_btn">
            <span class="m--up" @click="signIn = true">Sign Up</span>
            <span class="m--in" @click="signIn = false">Sign In</span>
          </div>
        </div>
        <div class="form">
          <h2>Time to feel like home</h2>
          <label>
            <span>Name</span>
            <input type="text" class="userDom" v-model="formData.user">
            <span class="show showUser">{{showData.showUser}}</span>
          </label>
          <label>
            <span>Email</span>
            <input type="email" class="eMailDom" v-model="formData.eMail">
            <span class="show showEmail">{{showData.showEmail}}</span>
          </label>
          <label>
            <span>Password</span>
            <input type="password" class="psDom" v-model="formData.password">
            <span class="show showPs">{{showData.showPs}}</span>
          </label>
          <button type="button" class="submit" @click="signUp">Sign Up</button>
          <button type="button" class="fb-btn">Join with <span>facebook</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Validator } from '../../util/strategy.js'
  export default {
    data () {
      return {
		signIn: false,
        formData: {
		  user: '',
          eMail: '',
          password: ''
        },
        showData: {
		  showUser: '',
		  showEmail: '',
		  showPs: ''
        }
      }
    },
    mounted () {
    },
    methods: {
	  signUp () {
		if (this.proxyRequest()) {
          console.log('请求')
        }
      },
	  proxyRequest () {
	    let validator = new Validator();
		let showUser = document.getElementsByClassName('showUser')[0];
		let showPs = document.getElementsByClassName('showPs')[0];
		let showEmail = document.getElementsByClassName('showEmail')[0];
		let checkUser = [
		  { strategy: 'isNonEmpty', errorMsg: '用户名不能为空' },
		  { strategy: 'maxLength: 10', errorMsg: '用户名最大不能超过10' },
		  { strategy: 'checkName', errorMsg: '用户名格式有误' }
		]
		let checkPs = [
		  { strategy: 'isNonEmpty', errorMsg: '密码不能为空' },
		  { strategy: 'checkPs', errorMsg: '密码名长度不能少于6,只能包含字母、数字、_-' }
		]
		let checkEmail = [
		  { strategy: 'isNonEmpty', errorMsg: '邮箱不能为空' },
		  { strategy: 'checkEmail', errorMsg: '邮箱格式有误' },
		]
		validator.add(this.formData.user, showUser, checkUser);
		validator.add(this.formData.eMail, showEmail, checkEmail);
		validator.add(this.formData.password, showPs, checkPs);
        return validator.start()
      }
    }
  }
</script>


<style lang="scss">
  @import '../../assets/css/defalut/login';
</style>

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
          <input type="email" v-model.trim="pageInfo.email">
        </label>
        <label>
          <span>Password</span>
          <input type="password" v-model.trim="pageInfo.password">
        </label>
        <p class="forgot-pass">Forgot password?</p>
        <button type="button" class="submit" @click="logIn">Sign In</button>
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
            <input type="text" class="userDom" v-model.trim="formData.user">
            <span class="show showUser">{{showData.showUser}}</span>
          </label>
          <label>
            <span>Email</span>
            <input type="email" class="eMailDom" @input="changeEmail" v-model.trim="formData.eMail">
            <span class="show showEmail">{{showData.showEmail}}</span>
          </label>
          <label>
            <span>Password</span>
            <input type="password" class="psDom" v-model.trim="formData.password">
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
  import util from '../../util/index'
  import api from '../../api/index'

  export default {
    data () {
      return {
		signIn: false,
        eMailFlag: false,
		pageInfo: { // 登录参数
		  email: '',
          password: ''
        },
        formData: { // 注册参数
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
      // 注册按钮
	  signUp () {
		if (this.proxyRequest() && this.eMailFlag) {
		  let formData = {
			...this.formData,
			password: this.$md5(this.formData.password)
		  }
		  let postData = this.$qs.stringify(formData)
          debugger
          api.registered(postData).then(res => {
            if (res.data.status === 'success') {
			  this.$message({
				message: '恭喜你注册成功',
				type: 'success'
			  })
              this.signIn = false
              this.formData = {
				user: '',
				eMail: '',
				password: ''
              }
            }
          })
        }
      },
      // input格式判断
	  proxyRequest () {
	    let validator = new Validator();
		let showUser = document.getElementsByClassName('showUser')[0];
		let showPs = document.getElementsByClassName('showPs')[0];
		let checkUser = [
		  { strategy: 'isNonEmpty', errorMsg: '用户名不能为空' },
		  { strategy: 'maxLength: 16', errorMsg: '用户名最大不能超过16' },
		  { strategy: 'checkName', errorMsg: '请输入4-16位字符，只能包含字母、数字、_-' }
		]
		let checkPs = [
		  { strategy: 'isNonEmpty', errorMsg: '密码不能为空' },
		  { strategy: 'checkPs', errorMsg: '密码名长度不能少于6,只能包含字母、数字、_-' }
		]
		validator.add(this.formData.user, showUser, checkUser);
		validator.add(this.formData.password, showPs, checkPs);
        return validator.start()
      },
      // 节流input判断是否存在邮箱
	  changeEmail: util.debounce(function() {
		let validator = new Validator();
		let showEmail = document.getElementsByClassName('showEmail')[0];
		let checkEmail = [
		  { strategy: 'isNonEmpty', errorMsg: '邮箱不能为空' },
		  { strategy: 'checkEmail', errorMsg: '邮箱格式有误' },
		];
		validator.add(this.formData.eMail, showEmail, checkEmail);

		if(validator.start()) {
		  showEmail.innerText = '';
		  api.queryEmail({email: this.formData.eMail}).then(res => {
			if (res.data.msg) {
			  this.eMailFlag = true;
			  showEmail.innerText = '';
            } else {
			  this.eMailFlag = false;
			  showEmail.innerText = '邮箱已存在';
            }
		  })
		}
	  }),
      // 登录
	  logIn () {
		let validator = new Validator();
		let oDiv = document.createElement('div')
		let checkPs = [
		  { strategy: 'isNonEmpty', errorMsg: '密码不能为空' },
		  { strategy: 'checkPs', errorMsg: '密码名长度不能少于6,只能包含字母、数字、_-' }
		]
		let checkEmail = [
		  { strategy: 'isNonEmpty', errorMsg: '邮箱不能为空' },
		  { strategy: 'checkEmail', errorMsg: '邮箱格式有误' },
		];
		validator.add(this.pageInfo.email, oDiv, checkEmail);
		validator.add(this.pageInfo.password, oDiv, checkPs);
		let pageInfo = {
		  ...this.pageInfo,
          password: this.$md5(this.pageInfo.password)
        }
		if (validator.start()) {
		  let postData = this.$qs.stringify(pageInfo)
          console.log(postData)
		  api.login(postData).then(res => {
		    let { data } = res
            console.log(data)
            if (data.status === 'success' && data.msg === '登录成功') {
			  this.$message({
				message: '登录成功',
				type: 'success'
			  })
              console.log(document.cookie)
            } else {
			  this.$message.error('邮箱或密码有误');
            }
          })
        } else {
		  this.$message.error('邮箱或密码有误');
        }
      }
    }
  }
</script>


<style lang="scss">
  @import '../../assets/css/defalut/login';
</style>

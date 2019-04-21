<template>
  <div class="live">
    <div id="landlord" style="left:5px;bottom:0px;">
      <div class="message" style="opacity:0"></div>
      <canvas id="live2d" width="500" height="560" class="live2d"></canvas>
      <div class="live_talk_input_body">
        <div class="live_talk_input_name_body">
          <input name="name" type="text" class="live_talk_name white_input" id="AIuserName" autocomplete="off" placeholder="你的名字" />
        </div>
        <div class="live_talk_input_text_body">
          <input name="talk" type="text" class="live_talk_talk white_input" id="AIuserText" autocomplete="off" placeholder="要和我聊什么呀？"/>
          <button type="button" class="live_talk_send_btn" id="talk_send">发送</button>
        </div>
      </div>
      <input name="live_talk" id="live_talk" value="1" type="hidden" />
      <div class="live_ico_box">
        <div class="live_ico_item type_info" id="showInfoBtn"></div>
        <div class="live_ico_item type_talk" id="showTalkBtn"></div>
        <div class="live_ico_item type_quit" id="hideButton"></div>
        <input name="live_statu_val" id="live_statu_val" value="0" type="hidden" />
      </div>
    </div>
    <div id="open_live2d">召唤伊斯特瓦尔</div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  @import '../../assets/live2d/css/live2d.css';
</style>

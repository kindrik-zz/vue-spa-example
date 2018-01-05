<template>
  <div class="bottom-padding">
    <b-row>
      <b-col class="one-col"></b-col>
      <b-col class="two-col"></b-col>
      <b-col class="three-col"></b-col>
      <b-col class="four-col"></b-col>

  </b-row>
  </div>
</template>

<style>
  .one-col{
    border-left:1px solid black;
    border-right:0px solid black;
    border-bottom:1px solid black;
    border-top:1px solid black;
    height:100px;
  }

  .two-col{
    border-left:1px solid black;
    border-right:1px solid black;
    border-bottom:1px solid black;
    border-top:1px solid black;
    height:100px;
  }

  .three-col{
    border-left:0px solid black;
    border-right:1px solid black;
    border-bottom:1px solid black;
    border-top:1px solid black;
    height:100px;
  }

  .four-col{
    border-left:0px solid black;
    border-right:1px solid black;
    border-bottom:1px solid black;
    border-top:1px solid black;
    height:100px;
  }

  .bottom-padding{
    margin-bottom:10px;
  }
</style>

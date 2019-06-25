<template>
    <div class="wrapper">
        <div class="sidebar" data-color = 'purple' data-image = '../assets/img/sidebar-5.jpg'>
            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="#" class="simple-text">
                        Chaipi
                    </a>
                </div>
                <ul class="nav">
                    <li class="active">
                        <router-link to = '/'>
                            <i class="pe-7s-graph"></i>
                            <p>Dashboard</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to = '/'>
                            <i class="pe-7s-user"></i>
                            <p>User</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="main-panel">
            <nav class="navbar navbar-default navbar-fixed">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Dashboard</a>
                    </div>
                    <div class="collapse navbar-collapse">
                        <ul class="nav navbar-nav navbar-left">
                            <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-dashboard"></i>
								<p class="hidden-lg hidden-md">Dashboard</p>
                            </a>
                        </li>
                        <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="fa fa-globe"></i>
                                    <b class="caret hidden-lg hidden-md"></b>
									<p class="hidden-lg hidden-md">
										5 Notifications
										<b class="caret"></b>
									</p>
                              </a>
                              <ul class="dropdown-menu">
                                <li><a href="#">Notification 1</a></li>
                                <li><a href="#">Notification 2</a></li>
                                <li><a href="#">Notification 3</a></li>
                                <li><a href="#">Notification 4</a></li>
                                <li><a href="#">Another notification</a></li>
                              </ul>
                        </li>
                        <li>
                           <a href="">
                                <i class="fa fa-search"></i>
								<p class="hidden-lg hidden-md">Search</p>
                            </a>
                        </li>
                        </ul>

                         <ul class="nav navbar-nav navbar-right">
                        <li>
                           <a href="">
                               <p>Account</p>
                            </a>
                        </li>
                        <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <p>
										Dropdown
										<b class="caret"></b>
									</p>

                              </a>
                              <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                              </ul>
                        </li>
                        <li>
                            <a href="#">
                                <p>Log out</p>
                            </a>
                        </li>
						<li class="separator hidden-lg"></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        <router-view></router-view>
        <footer class="footer">
            <div class="container-fluid">
                <nav class="pull-left">
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Company
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#">
                               Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <p class="copyright pull-right">
                    &copy; 2019 <a href="/">Dev</a>
                </p>
            </div>
        </footer>
    </div>
</template>







































<!--
<template>
    <div class="container">
        <div v-if="userRole == true">
        <h2>
            Hello World:(
        </h2>
        <br>
        <button class="btn btn-danger pull-right"  @click='logOut'> Logout </button> <br><br>
        <pre>
            {{user}}
        </pre>
        <p class="text-primary">
            {{userId}}
        </p>
        </div>
        <div v-else>
            <h2 class="text-danger">
                You are not valid permission to serve this page.
            </h2>
        </div>
    </div>
</template>
-->
<script>
import axios from 'axios'
export default {
    name: 'dashboard',
    data() {
        return {
            user: '',
            userId: '',
            userRole:''
        }
    },
    computed:{
      userdata(){
          if (this.$store.state.user == null) return '';
          return this.$store.state.user;
      }
    },
    methods: {
        logOut(){
            firebase.auth().signOut();
        }
    }
}
</script>

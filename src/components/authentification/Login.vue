<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <div v-if="error.success === false" class="alert alert-danger">{{error.message}}</div>
                        <div v-else-if="error.success === true" class="alert alert-success">{{error.message}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            value
                                            required
                                            autofocus
                                            v-model="form.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <div class="col-md-12 offset-md-1">
                                    <button type="submit" class="btn btn-primary mr-0">Login</button>
                                    <img type="submit"  src="../../assets/google_badge.png" v-on:click="useGoogle()" width="200px" >
                                </div>
                            </div>
                            <a type="submit" class="m-4" v-on:click="resetPassword()"><u>Reset Password</u></a>
                            <a type="submit" class="m-4" v-on:click="resetPassword()"><u>Forgot Password</u></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from "firebase";

    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: ""
                },
                error: {
                    success: null,
                    message: null
                }
            };
        },
        methods: {
            submit() {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        this.error.success = true;
                        window.console.log(data);
                        this.$router.replace({name: "Dashboard"});
                    })
                    .catch(err => {
                        window.console.log("Could not log in: err");
                        this.error.success = false;
                        this.error.message = err.message;
                    });
            },
            resetPassword() {
                const mythis = this;
                firebase.auth().onAuthStateChanged(function (user) {
                    if (user) {
                        //s
                    } else {
                        firebase.auth().sendPasswordResetEmail(mythis.form.email).then(function () {
                            mythis.error.message = "Successfully send password reset mail";
                            mythis.error.success = true;
                            this.$router.push("/");
                        }).catch(function (error) {
                            mythis.error.message = error.message;
                            mythis.error.success = false;
                        })
                    }
                });
            },
            useGoogle() {
                const mythis = this;
                const provider = new firebase.auth.GoogleAuthProvider();
                // eslint-disable-next-line no-unused-vars
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    mythis.error.success = true;
                    mythis.error.message = "Sucessfully logged in with google";
                }).catch(function (error) {
                    mythis.error.message = error.message;
                    mythis.error.success = false;

                });
            }
        }
    };
</script>
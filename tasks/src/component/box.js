import React from 'react';



class Box extends React.Component{
    render(){
        return(
            <div> 
                <form action="#" method="post">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-phone" aria-hidden="true"></i></span>
                        </div>
                        <input type="tel" class="form-control" placeholder="Phone" />
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <input type="password" class="form-control is-invalid" placeholder="Password" />
                        <div class="invalid-feedback">
                            Password is required
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default Box;
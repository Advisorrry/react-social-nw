import React from 'react'
import './messanger.scss'

export function Messenger() {
    return (
        <div class="messanger__container" ng-cloak ng-app="chatApp">
            <div class="chatbox" ng-controller="MessageCtrl as chatMessage">
                <div class="chatbox__user-list">
                    <h1>Текущие диалоги</h1>
                    <div class="chatbox__user--active">
                        <p>Андрей</p>
                    </div>
                    <div class="chatbox__user--busy">
                        <p>Петр</p>
                    </div>
                    <div class="chatbox__user--active">
                        <p>Евгений</p>
                    </div>
                    <div class="chatbox__user--active">
                        <p>Маша</p>
                    </div>
                    <div class="chatbox__user--active">
                        <p>Паша</p>
                    </div>
                    <div class="chatbox__user--active">
                        <p>Соня</p>
                    </div>
                    <div class="chatbox__user--away">
                        <p>Владимир Путин</p>
                    </div>
                    
                </div>
                <div class="chatbox__messages" ng-repeat="message in messages">
                    <div class="chatbox__messages__user-message">
                        <div class="chatbox__messages__user-message--ind-message">
                            <p class="name">message.Name</p>
                            <br />
                            <p class="message">message.Message</p>
                        </div>
                        <div class="chatbox__messages__user-message--ind-message">
                            <p class="name">message.Name</p>
                            <br />
                            <p class="message">message.Message</p>
                        </div>
                        <div class="chatbox__messages__user-message--ind-message">
                            <p class="name">message.Name</p>
                            <br />
                            <p class="message">message.Message</p>
                        </div>
                        
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Enter your message" />
                </form>
            </div>
        </div>
    )
}

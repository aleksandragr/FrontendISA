import { Component, OnInit } from '@angular/core';
import { FriendshipService } from '../../services/friendship/friendship.service';
import { User } from '../../user';
import { LoggedinService } from '../../services/loggedin/loggedin.service';
import { friendship } from '../../friendship';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  user: User;
  friendships: friendship[];
  frinedship: friendship;
  friendss: User[];

  constructor(private friendshipservice: FriendshipService,
        private loggedinService: LoggedinService
  ) { }

  ngOnInit() {

    var u = this.loggedinService.getLocalStore();

    this.user = u;

    this.friendshipservice.getRequests(this.user.id)
    .subscribe(data => this.friendships = data);

    this.friendshipservice.getFriends(this.user.id)
    .subscribe(data =>{ this.friendss = data;
      console.log(this.friendss[0]);
    });


  }


  acceptFriend(idfs): void{

    this.friendshipservice.acceptRequest(idfs)
    .subscribe(data => this.frinedship = data);
    location.reload();
  }

  declineFriend(idfs): void{

    this.friendshipservice.declineRequest(idfs)
    .subscribe(data => this.frinedship = data);
    location.reload();
  }


 
}

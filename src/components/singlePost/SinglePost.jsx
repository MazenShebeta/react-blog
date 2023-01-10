import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>John Doe</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae eius voluptatum illo eos impedit quidem reprehenderit sint nulla nemo eligendi beatae ipsam molestias laudantium atque possimus autem sed pariatur doloribus velit facilis iure repudiandae, voluptas, rerum veritatis? Possimus necessitatibus explicabo eius qui, obcaecati atque facilis enim! Aperiam amet dicta esse quam voluptatibus eaque laborum quasi ducimus odio tempora accusamus illum, maxime natus, aut cum velit doloremque! Quisquam, ipsa ullam. Consequatur possimus debitis repellendus illum a qui cumque esse nisi! Illo ut natus harum ipsa vitae aut, iure officia officiis delectus explicabo est laboriosam! Aspernatur iste quam iusto laboriosam quaerat quasi aliquid nulla quis reprehenderit tempora molestiae, praesentium asperiores eum itaque nihil voluptatem enim dolorem dolorum et facilis laudantium minus at doloribus eligendi! Error porro sed corrupti magni, officia animi soluta. Recusandae amet nihil ipsum. Magni exercitationem voluptatum assumenda porro atque corporis sit pariatur doloribus ab repellat, odio maiores nobis reprehenderit accusamus repellendus quasi ea aspernatur sequi excepturi illum ut. Labore enim, omnis inventore est repellendus esse. Earum excepturi quaerat tempora praesentium, aperiam fugiat sed officiis voluptatem id laudantium error neque iste veritatis ducimus soluta eaque quo! Unde, nihil. Voluptate enim porro earum eaque? Nostrum ea similique consequuntur numquam ducimus? Delectus tempore praesentium unde error, nam corporis sapiente deleniti id, hic, assumenda dolorem sequi ratione quibusdam a autem est nesciunt repellendus. Ipsam voluptatum rerum, quibusdam expedita excepturi perspiciatis voluptatem officia asperiores obcaecati soluta labore, eligendi nostrum ratione tenetur delectus exercitationem, nemo natus quas. Ipsam vero voluptatum eaque iure consequuntur quo voluptatem, blanditiis excepturi, id nobis culpa quod hic doloremque nisi consequatur veritatis dolorum ex repellat exercitationem necessitatibus aut repellendus? Sit autem possimus nemo totam impedit? Quaerat ducimus aspernatur alias officia consectetur voluptatum iusto? Nobis ex tenetur officia incidunt vitae repudiandae dolores est dolor deleniti odio soluta, quasi repellendus facilis minima officiis?</p>
      </div>
    </div>
  );
}

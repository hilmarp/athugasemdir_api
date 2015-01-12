<?php

class CommentController extends BaseController {

	public function index() {

		return Response::json(Comment::get());
	}

	public function store() {

		Comment::create([
			'author' => Input::get('author'),
			'text' => Input::get('text')
		]);

		return Response::json(['success' => true]);
	}

	public function destroy($id) {

		Comment::destroy($id);


		return Response::json(['success' => true]);
	}
}
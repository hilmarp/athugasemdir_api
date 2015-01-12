<?php

class CommentTableSeeder extends Seeder {

	public function run() {

		DB::table('comments')->delete();

		Comment::create([
			'author' => 'Hilmar Pálsson',
			'text' => 'Hæ ég er test comment'
		]);

		Comment::create([
			'author' => 'Hulda Pálsdóttir',
			'text' => 'Þetta er nú meira ruglið'
		]);

		Comment::create([
			'author' => 'Baldvin Pálsson',
			'text' => 'Hilma er bestur!'
		]);
	}
}